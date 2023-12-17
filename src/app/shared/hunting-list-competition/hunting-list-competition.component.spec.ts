import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntingListCompetitionComponent } from './hunting-list-competition.component';

describe('HuntingListCompetitionComponent', () => {
  let component: HuntingListCompetitionComponent;
  let fixture: ComponentFixture<HuntingListCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuntingListCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuntingListCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
