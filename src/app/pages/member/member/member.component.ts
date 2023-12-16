import { Component , OnInit , OnChanges } from '@angular/core';
import { PageMember } from 'src/app/models/member-model';
import { MemberService } from 'src/app/services/member/member.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit , OnChanges{
  pageMembers!: PageMember;

  constructor(private memberService: MemberService) { }


  ngOnInit(): void {
      this.getMembers();
  }


  ngOnChanges() {

    console.log("ngOnChanges");
  }

  // ...

  onSearchMember(event: any) {
    if (event.target?.value === '') {
      this.getMembers();
      return;
    }
    console.log(event.target?.value);
    const params: Map<string, string> = new Map<string, string>();
    params.set('name', event.target?.value);
    // params.set('familyName', event.target?.value);
    // params.set('num', event.target?.value);

    this.memberService.findMemberByMoreThanParam(params)
      //TODO: PROBLEM HERE KEEP CALLING THE GET MEMBER'S
      .pipe(debounceTime(500)) // Add debounceTime operator with a delay of 500ms
      .subscribe(
        data => {
          console.log(data);
          this.pageMembers.content = [
            data
          ]
        },
        error => {
          console.log(error);
        }
      );
  }

  getMembers() {
    console.log("getMembers list of member's ");

    this.memberService.listerLesMembres(0, 10).subscribe(
      data => {
        this.pageMembers = data;
        console.log(this.pageMembers);

    }, err => {
      console.log(err);
    })
  }

  refersh(event: any) {
    this.getMembers();
  }







}
