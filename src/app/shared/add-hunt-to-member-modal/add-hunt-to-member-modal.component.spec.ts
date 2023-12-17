import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHuntToMemberModalComponent } from './add-hunt-to-member-modal.component';

describe('AddHuntToMemberModalComponent', () => {
  let component: AddHuntToMemberModalComponent;
  let fixture: ComponentFixture<AddHuntToMemberModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHuntToMemberModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHuntToMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
