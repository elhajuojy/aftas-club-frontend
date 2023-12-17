import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';
import { PodiumCompetition } from 'src/app/models/podium-compeittion.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private baseUrl: string = environment.backendHost;


  constructor(
    private http: HttpClient
  ) { }

  public affichePodium(params: any): Observable<PodiumCompetition>{
    return new Observable<PodiumCompetition>();
  }

  public bulidQueryParams(query:Map<string, string> ): string {
    // Function body goes here
    const params = new URLSearchParams(Object.fromEntries(query));
    console.log(params.toString());
    return params.toString();
  }

  public affichePodiumCompetition(code: string, queryParams: Map<string, string>): Observable<PodiumCompetition>{
    // Function body goes here
    // this.bulidQueryParams(queryParams);
    return this.http.get<PodiumCompetition>(this.baseUrl + '/competitions/' + code + '/podiums?sort=score');
  }
}
