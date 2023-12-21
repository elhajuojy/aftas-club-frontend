import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, from } from 'rxjs';
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
  public addFish(fish: FormGroup): Observable<Fish> {
    console.log(from);


    return this.http.post<Fish>(this.baseUrl + '/fishes', fish.value);
  }
}
