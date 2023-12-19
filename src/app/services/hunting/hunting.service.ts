import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  private baseUrl: string = environment.backendHost;



  constructor(
    private http: HttpClient
  ) { }

  public getCompeitions(page:number,size:number,):Observable<any> {
    return this.http.get(this.baseUrl + '/competitions');
  }

  public getCompetitionById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/competitions/' + id);
  }

  public ajouterHuntToMember(competitionId: string, newHunt: any): Observable<any> {
    console.log(newHunt);

    return this.http.post(this.baseUrl + '/competitions/' + competitionId + '/hunting', newHunt);
  }
}
