import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fish } from 'src/app/models/fish.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private baseUrl: string = environment.backendHost;



  constructor(
    private http: HttpClient
  ) { }


  public getFishs(): Observable<Array<Fish>> {
    return this.http.get<Array<Fish>>(this.baseUrl + '/fishes');
  }
}
