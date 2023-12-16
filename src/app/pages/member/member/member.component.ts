import { Component , OnInit } from '@angular/core';
import { PageMember } from 'src/app/models/member-model';
import { MemberService } from 'src/app/services/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  pageMembers!: PageMember;

  constructor(private memberService: MemberService) { }
  ngOnInit(): void {
    this.getMembers();
  }

  searchMember() {
    console.log("searchMember");
  }
  getMembers() {
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
