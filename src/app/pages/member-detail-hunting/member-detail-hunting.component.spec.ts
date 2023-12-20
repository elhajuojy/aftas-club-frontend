import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailHuntingComponent } from './member-detail-hunting.component';

describe('MemberDetailHuntingComponent', () => {
  let component: MemberDetailHuntingComponent;
  let fixture: ComponentFixture<MemberDetailHuntingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDetailHuntingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDetailHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
