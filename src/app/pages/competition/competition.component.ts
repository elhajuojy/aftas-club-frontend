import { Component , OnInit } from '@angular/core';
import { Competition } from 'src/app/models/Competition.model'
import { ButtonModule } from 'primeng/button';
import { CompeititonService } from 'src/app/services/competition/compeititon.service';
import { IcompetitionsStatus, StatusCompetition } from 'src/app/models/competition-status-enum.model';
import { DropdownModule } from 'primeng/dropdown';
import { ActivatedRoute, Router } from '@angular/router';



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
  size:number = 3;
  totalPages: number = 0;
  queryparams!: StatusCompetition ;
  constructor(private competitionService: CompeititonService, private router: Router, private route : ActivatedRoute) {
    // Inside your component

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
    //TODO: GET QUERY PARAMS FROM URL
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.page = params['page'];
      switch (params['status']) {
        case 'ferme':
          this.queryparams = StatusCompetition.AVENIR;
          break;
        case 'encours':
          this.queryparams = StatusCompetition.ENCOURS;
          break;
        case 'avenir':
          this.queryparams = StatusCompetition.FERME;
          break;
        default:
          this.queryparams = StatusCompetition.default;
          break;
      }
      this.competitionService.getCompeitions(this.page, this.size, this.queryparams).subscribe(
        data => {
          this.competitions = data.content;
          console.log(data);
          this.upadteCompetitionStatus(this.competitions);
          this.totalPages = data.totalPages;
          console.log("calling getCompeitions");

        },
        error => {
          console.log(error);
        }

      )
    });


    this.competitionService.getCompeitions(this.page, this.size, this.queryparams).subscribe(
      data => {
        this.competitions = data.content;
        console.log(data);
        this.upadteCompetitionStatus(this.competitions);
        this.totalPages = data.totalPages;
        console.log("calling getCompeitions");

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
