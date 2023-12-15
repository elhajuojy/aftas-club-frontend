import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusCompetition , IcompetitionsStatus } from 'src/app/models/competition-status-enum.model';

@Component({
  selector: 'app-filter-dropdown-competition',
  templateUrl: './filter-dropdown-competition.component.html',
  styleUrls: ['./filter-dropdown-competition.component.scss']
})
export class FilterDropdownCompetitionComponent {

  competitionsStatus: IcompetitionsStatus[] = [
  { name: 'avenir', code: StatusCompetition.AVENIR, url: '/competitions?status=avenir' },
  { name: 'encours', code: StatusCompetition.ENCOURS, url: '/competitions?status=encours' },
  { name: 'ferme', code: StatusCompetition.FERME, url: '/competitions?status=ferme' },
  ];

  constructor(private router:Router) { }
  routeToAnotherPage(param: string): void {
    this.router.navigate(['/competitions'], { queryParams: { status: param  } });
  }


}
