import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.scss']
})
export class CompetitionDetailComponent implements OnInit {
  competitionId!: string;

  constructor(
    private activeRoute: ActivatedRoute,

  ) { }
  ngOnInit(): void {

    this.activeRoute.params.subscribe(s => {
      this.competitionId = s['id'];
    });

  }





}
