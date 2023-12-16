import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CompeititonService } from 'src/app/services/competition/compeititon.service';
import { CompetitionRequest } from 'src/app/models/Competition.model';
import { ToastService } from 'angular-toastify';
import Swal from 'sweetalert2';

import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-add-member-modal',
  templateUrl: './add-member-modal.component.html',
  styleUrls: ['./add-member-modal.component.scss']
})
export class AddMemberModalComponent {
  @Output() refershParent = new EventEmitter();
  @ViewChild('closebutton') closebutton: any;
  memberFrom!: FormGroup;
  identityDocumentTypes = [
     'CIN',
    'PASSPORT',
     'CATRE_PRESIDENCE'
  ]

  constructor(private memberService: MemberService , private _toastService: ToastService) {
    this.memberFrom = new FormGroup({});
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.memberFrom = new FormGroup({
      name: new FormControl(''),
      familyName: new FormControl(''),
      nationality: new FormControl(''),
      identityDocumentType: new FormControl(''),
      identityNumber: new FormControl(''),
    });
  }



  public onSubmit(from:FormGroup):void {
    console.log("onSubmit");
    console.log("Valid: " + from.valid);
    console.log("Value: " + from.value.toString());
    //TODO: VALIDATION THAN SEND TO BACKEND
  this.memberService.ajouterMembre(from.value).subscribe(
      data => {
        console.log(data);
      this._toastService.success("Membre ajouté avec succès");
      this.memberService.listerLesMembres(0, 10);
      //TODO : close modal
        // document.getElementById("close-add-member-modal")?.click();
      this.closebutton.nativeElement.click();
      this.refershParent.emit();
      },
      error => {
        console.log(error);
        this._toastService.error(error.error.message);


      }
    );
  }


}
