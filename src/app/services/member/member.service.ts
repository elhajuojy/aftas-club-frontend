import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member, PageMember } from 'src/app/models/member-model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl: string = environment.backendHost;



  constructor(
    private http: HttpClient
  ) { }

  public bulidQueryParams(query:Map<string, string> ): string {
    // Function body goes here
    const params = new URLSearchParams(Object.fromEntries(query));
    console.log(params.toString());
    return params.toString();
  }

  public listerLesMembres(page: number, size: number): Observable<PageMember> {
    return this.http.get<PageMember>(this.baseUrl + '/members?page=' + page + '&size=' + size);
  }
  public ajouterMembre(member: Member): Observable<Member> {
    console.log(member);
    return this.http.post<Member>(this.baseUrl + '/members', member);
  }

  public findMemberByMoreThanParam(queryParams: Map<string, string>): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + '/members/search?' + this.bulidQueryParams(queryParams));
  }

}
