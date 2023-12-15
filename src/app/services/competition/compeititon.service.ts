import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusCompetition } from 'src/app/models/competition-status-enum.model';
@Injectable({
  providedIn: 'root'
})
export class CompeititonService {

  private baseUrl: string = environment.backendHost;



  constructor(
    private http: HttpClient
  ) { }

  public getCompeitions(page:number,size:number,compeititonStatus :StatusCompetition):Observable<any> {
    return this.http.get(this.baseUrl + '/competitions');
  }


}
