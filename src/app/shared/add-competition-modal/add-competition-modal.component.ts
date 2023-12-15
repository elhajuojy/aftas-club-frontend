import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CompeititonService } from 'src/app/services/competition/compeititon.service';
import { CompetitionRequest } from 'src/app/models/Competition.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-competition-modal',
  templateUrl: './add-competition-modal.component.html',
  styleUrls: ['./add-competition-modal.component.scss']

})
export class AddCompetitionModalComponent implements OnInit {

   compeitionForm!: FormGroup;

  constructor(private competitionService: CompeititonService) {
    this.compeitionForm = new FormGroup({});
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.compeitionForm = new FormGroup({
      name: new FormControl('name'),
      startTime: new FormControl('startTime'),
      endTime: new FormControl('endTime'),
      location: new FormControl('location'),
      amount: new FormControl('amount'),
      date: new FormControl('date'),
    });
  }



  public onSubmit(from:FormGroup):void {
    console.log("onSubmit");
    console.log("Valid: " + from.valid);
    console.log("Value: " + from.value.toString());
    //TODO: VALIDATION THAN SEND TO BACKEND
    this.competitionService.ajouterCompetition(from.value).subscribe(
      data => {
        console.log(data);
              Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
            });
      },
      error => {
        console.log(error);
      }
    );
  }

}
