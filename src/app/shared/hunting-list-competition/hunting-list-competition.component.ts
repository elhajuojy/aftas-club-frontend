import { Component, Input, TrackByFunction } from '@angular/core';
import { Content } from 'src/app/models/podium-compeittion.model';
import { CompeititonService } from 'src/app/services/competition/compeititon.service';
import { HuntingService } from 'src/app/services/hunting/hunting.service';
import { RankingService } from 'src/app/services/ranking/ranking.service';

@Component({
  selector: 'app-hunting-list-competition',
  templateUrl: './hunting-list-competition.component.html',
  styleUrls: ['./hunting-list-competition.component.scss']
})
export class HuntingListCompetitionComponent {
  @Input() competitionId!: string;
  contents: Array<Content> = [];
  trackByFn: TrackByFunction<Content>;

  constructor(private rankingService: RankingService) {
    this.trackByFn = (index, item) => item.num;
  }

  ngOnInit(): void {
    this.rankingService.affichePodiumCompetition(this.competitionId.toString(), new Map<string, string>()).
      subscribe({
        next: data => {
          console.log(data);
          this.contents = data.podium.content;
        },
        error: error => {
          console.log(error);
        }
      }

    );
  }



}
