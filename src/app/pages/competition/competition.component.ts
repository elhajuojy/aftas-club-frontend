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

setStatus(arg0: string) {
  if (arg0 === "avenir") {
    return this.competitionStatus.purple;
  }
  else if (arg0 === 'ferme') {
    return this.competitionStatus.red
  }
  else if (arg0 === 'encours') {
    return this.competitionStatus.green
  } else {
    return ''
  }
}





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

  competitionStatus = {
    green: 'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300',
    red: 'bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300',
    yellow: 'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300',
    purple :'bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300'
  };

  upadteCompetitionStatus(competitions: Competition[]): void {
    this.competitions.forEach((competition, index) => {
      const currentDate = new Date().getDate();
      const competitionDate = new Date(competition.date).getDate();


      if (competitionDate > currentDate) {
        competition.status = StatusCompetition.AVENIR
      } else if (competitionDate < currentDate) {
        competition.status = StatusCompetition.FERME
      }else if (competitionDate === currentDate) {
        competition.status = StatusCompetition.ENCOURS
      }
    });
  }

  ngOnInit(): void {
    //: GET QUERY PARAMS FROM URL
    this.route.queryParams.subscribe(params => {
      this.page = params['page'];
      switch (params['status']) {
        case 'ferme':
          this.queryparams = StatusCompetition.FERME;
          break;
        case 'encours':
          this.queryparams = StatusCompetition.ENCOURS;
          break;
        case 'avenir':
          this.queryparams = StatusCompetition.AVENIR;
          break;
        default:
          this.queryparams = StatusCompetition.default;
          break;
      }
      this.competitionService.getCompeitions(this.page, this.size, this.queryparams).subscribe(
        data => {
          this.competitions = data.content;
          this.upadteCompetitionStatus(this.competitions);
          this.totalPages = data.totalPages;
        },
        error => {
          console.log(error);
        }

      )
    });


    this.competitionService.getCompeitions(this.page, this.size, this.queryparams).subscribe(
      data => {
        this.competitions = data.content;
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
