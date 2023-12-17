import { Component, Input, TrackByFunction } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { Fish } from 'src/app/models/fish.model';
import { FishService } from 'src/app/services/fish/fish.service';
import { HuntingService } from 'src/app/services/hunting/hunting.service';

@Component({
  selector: 'app-add-hunt-to-member-modal',
  templateUrl: './add-hunt-to-member-modal.component.html',
  styleUrls: ['./add-hunt-to-member-modal.component.scss']
})
export class AddHuntToMemberModalComponent {

  @Input() competitionId!: string;
  @Input() memberId!: number;
  from!: FormGroup;

  fishs: Fish[] = [];
  trackFishById: TrackByFunction<Fish>;

  constructor(private fishService : FishService , private huntingService : HuntingService , private _toastService: ToastService) {
    this.trackFishById = (_: number, fish: Fish) => fish.id;
  }

  ngOnInit(): void {
    this.from = new FormGroup({
      fishId: new FormControl(''),
    });

    console.log(this.memberId);
    console.log(this.competitionId);
    this.fishService.getFishs().subscribe(
      data => {
        console.log(data);
        this.fishs = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmitHunt(from:FormGroup) {
    this.huntingService.ajouterHuntToMember(
      this.competitionId, this.memberId ,this.from.value.fishId
    ).subscribe(
      data => {
        console.log(data);
        this._toastService.success(data.message);
        //refersh the page
        window.location.reload();
      },
      error => {
        console.log(error);
        this._toastService.error(error.error.message);
      }
    );

  }
  clickme(param:string) {
    console.log("clickme" + param);
  }

}
