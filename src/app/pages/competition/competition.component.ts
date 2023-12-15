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
  ]
  page:number = 0;
  size:number = 0;
  totalPages: number = 0;
  constructor(private competitionService: CompeititonService) {
  }

  upadteCompetitionStatus(competitions: Competition[]): void {
    this.competitions.forEach((competition, index) => {
      const currentDate = new Date();
      const competitionDate = new Date(competition.date);

      if (competitionDate > currentDate) {
        competition.status = StatusCompetition.AVENIR
      } else if (competitionDate < currentDate) {
        competition.status = StatusCompetition.FERME
      } else {
        competition.status =StatusCompetition.ENCOURS
      }
    });
  }

  ngOnInit(): void {
    console.log("ngOnInit");

    this.competitionService.getCompeitions(this.page, this.size, StatusCompetition.AVENIR).subscribe(
      data => {
        this.competitions = data.content;
        console.log(data);
        this.upadteCompetitionStatus(this.competitions);
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
