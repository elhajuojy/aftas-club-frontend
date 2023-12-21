import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from 'src/app/models/level.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private baseUrl: string = environment.backendHost;



  constructor(
    private http: HttpClient
  ) { }



  public getLevels(): Observable<Array<Level>> {
    return this.http.get<Array<Level>>(this.baseUrl + '/levels');
  }
}
