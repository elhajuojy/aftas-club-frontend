import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberToCompetitionComponent } from './add-member-to-competition.component';

describe('AddMemberToCompetitionComponent', () => {
  let component: AddMemberToCompetitionComponent;
  let fixture: ComponentFixture<AddMemberToCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMemberToCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMemberToCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
