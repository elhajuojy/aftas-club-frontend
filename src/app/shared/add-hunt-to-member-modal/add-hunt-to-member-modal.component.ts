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
  @Input() isTodayForHunting !: boolean;

  from!: FormGroup;

  fishs: Fish[] = [];
  trackFishById: TrackByFunction<Fish>;



  constructor(private fishService : FishService , private huntingService : HuntingService , private _toastService: ToastService) {
    this.trackFishById = (_: number, fish: Fish) => fish.id;
  }

  ngOnInit(): void {
    this.from = new FormGroup({
      fishId: new FormControl(''),
      weight: new FormControl(''),
      number_of_fish: new FormControl(''),
    });


    this.fishService.getFishs().subscribe(
      data => {
        this.fishs = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmitHunt(from: FormGroup) {
    //TODO : VALIDATE THE FORM
    var newHunt = {
      fishId: this.from.value.fishId,
      weight: this.from.value.weight,
      number_of_fish: this.from.value.number_of_fish,
      num : this.memberId
    }
    this.huntingService.ajouterHuntToMember(
      this.competitionId, newHunt
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




