import { Component , OnInit } from '@angular/core';
import { Competition } from 'src/app/models/Competition.model'
import { ButtonModule } from 'primeng/button';
import { CompeititonService } from 'src/app/services/competition/compeititon.service';
import { StatusCompetition } from 'src/app/models/competition-status-enum.model';
import { DropdownModule } from 'primeng/dropdown';


interface IcompetitionsStatus{
  name: string;
  code: StatusCompetition;

}
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})

export class CompetitionComponent implements OnInit   {

  competitionsStatus: IcompetitionsStatus[] | undefined;
  selectedStatus: IcompetitionsStatus | undefined;



  competitions: Competition[] = [
      {
            "code": "91442123",
            "date": "2023-12-17",
            "startTime": "08:00:00",
            "endTime": "17:00:00",
            "numberOfParticipants": 3,
            "location": "Nador",
            "amount": 50000.0,
            "status": "AVENIR"
        },
        {
            "code": "01949759",
            "date": "2023-12-17",
            "startTime": "08:00:00",
            "endTime": "17:00:00",
            "numberOfParticipants": 3,
            "location": "Nador",
            "amount": 50000.0,
            "status": "AVENIR"
        }
  ]
  page:number = 0;
  size:number = 0;
  totalPages: number = 0;
  constructor(private competitionService: CompeititonService) {

  }

  ngOnInit(): void {
    console.log("ngOnInit");

    this.competitionService.getCompeitions(this.page, this.size, StatusCompetition.AVENIR).subscribe(
      data => {
        this.competitions = data.content;
        console.log(data);
        this.totalPages = data.totalPages;
      },
      error => {
        console.log(error);
      }

    )
    this.competitionsStatus = [
      { name: 'AVENIR', code: StatusCompetition.AVENIR },
      { name: 'EN_COURS', code: StatusCompetition.ENCOURS },
      { name: 'TERMINE', code: StatusCompetition.FERME },
    ];

  }




}
