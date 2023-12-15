import { Component, OnInit  } from '@angular/core';
import { RankingService } from 'src/app/services/ranking/ranking.service';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'src/app/models/podium-compeittion.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  contents: Array<Content> = [];



  constructor(private rankingService: RankingService, private activeRoute :ActivatedRoute) {
  }

  public sortRanking(): void {
    this.contents.sort((a, b) => {
      return a.rank - b.rank;
    });
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {


      this.rankingService.affichePodiumCompetition(params['id'], new Map<string, string>()).subscribe(
        data => {
          // console.log(data);
          this.contents = data.podium.content;
          console.log(this.contents);
          this.sortRanking();
        },
        error => {
          console.log(error);
        }
      );
    }
    );
  }
}
