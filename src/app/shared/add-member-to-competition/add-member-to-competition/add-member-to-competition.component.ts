import { Component, Input } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { CompeititonService } from 'src/app/services/competition/compeititon.service';

@Component({
  selector: 'app-add-member-to-competition',
  templateUrl: './add-member-to-competition.component.html',
  styleUrls: ['./add-member-to-competition.component.scss']
})
export class AddMemberToCompetitionComponent {
  memberFrom!: FormGroup;
  @Input() competitionId!: string;




  constructor(private competitionService: CompeititonService, private activeRoute: ActivatedRoute,
    private _toastService: ToastService
  ) {
    this.memberFrom = new FormGroup({});
  }

  ngOnInit(): void {
    this.memberFrom = new FormGroup({
      identityNumber: new FormControl(''),
      codeCompetition : new FormControl('id')
    });

    this.memberFrom.controls['codeCompetition'].setValue(this.competitionId);


  }

  onSubmit(from: FormGroup) {
    console.log(from.value);
    this.competitionService.ajouterMembreDansCompetition(from.value).subscribe(
      data => {
        console.log(data);
        //TODO: NOT RUNING ??? WHY
        this._toastService.success("Membre ajouté avec succès");
      },
      error => {
        //NOT RUNING ??? WHY
        this._toastService.error(error.error.message);
        console.log(error);

      }
    );
  }
}
