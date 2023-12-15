import { Component, Input } from '@angular/core';
import { Content, PagePodium, PodiumCompetition } from 'src/app/models/podium-compeittion.model';

@Component({
  selector: 'app-rank-card-tr',
  templateUrl: './rank-card-tr.component.html',
  styleUrls: ['./rank-card-tr.component.scss']
})
export class RankCardTrComponent {

  @Input() content: Content | undefined;

  constructor() { }

}
