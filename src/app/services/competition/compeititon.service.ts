import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusCompetition } from 'src/app/models/competition-status-enum.model';
import { Competition } from 'src/app/models/Competition.model';
import { CompetitionRequest } from 'src/app/models/Competition.model';
@Injectable({
  providedIn: 'root'
})
export class CompeititonService {
  getCompeitionsById(competitionId: string) :Observable<Competition>{
    return this.http.get<Competition>(this.baseUrl + '/competitions/' + competitionId);
  }

  private baseUrl: string = environment.backendHost;



  constructor(
    private http: HttpClient
  ) { }

  public getCompeitions(page: number, size: number, compeititonStatus: StatusCompetition): Observable<any> {
    if (page == undefined) {
      page = 0;
    }
    if (size == undefined) {
      size = 3;
    }
    if (compeititonStatus == StatusCompetition.default) {
      return this.http.get(this.baseUrl + '/competitions?page=' + page + '&size=' + size);
    }

    var statusQuery= '&status=' + compeititonStatus;
    return this.http.get(this.baseUrl + '/competitions?page=' + page + '&size=' + size + statusQuery);
  }

  public ajouterCompetition(competitionRequest: CompetitionRequest): Observable<Competition>{
    return this.http.post<Competition>(this.baseUrl + '/competitions', competitionRequest);
  }

  public ajouterMembreDansCompetition(memberCompetitionRequest: any): Observable<any> {
    const  MemberCompetitionRequest =  {
      identityNumber  : memberCompetitionRequest.identityNumber,
      codeCompetition : memberCompetitionRequest.codeCompetition
    };

    return this.http.post<any>(this.baseUrl + '/competitions/' + memberCompetitionRequest.codeCompetition + '/members',MemberCompetitionRequest );
  }

  public isTimeBetween(startTime: string, endTime: string):boolean {
    const date = new Date()
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    var currentTime = `${hour}:${minutes}:${seconds}`;

    // currentTime = "8:55:00"
    return startTime <= currentTime && currentTime <= endTime;

    return false;

  }
  public getCompetitionStatus(competition: Competition): StatusCompetition{
    //TODO: CHECK THE DATE IF EQUAL TO TODAY DATE AND STARTTIME AND ENDTIME ARE ALSO THE SAME
    const date = new Date()
    const currentDate = date.getDate();
    const competitionDate = new Date(competition.date).getDate();





      if (competitionDate > currentDate ) {
        return StatusCompetition.AVENIR
      } else if (competitionDate < currentDate) {
        return StatusCompetition.FERME
      } else if (competitionDate === currentDate) {
        if (!this.isTimeBetween(competition.startTime,competition.endTime)) {
            return StatusCompetition.FERME
        }
        //TODO : CHECK TIMING BETWEEN START TIME END TIME
        return StatusCompetition.ENCOURS
      } else {
        return StatusCompetition.default
      }
  }


}
