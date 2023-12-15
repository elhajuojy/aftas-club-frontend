import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitionModalComponent } from './add-competition-modal.component';

describe('AddCompetitionModalComponent', () => {
  let component: AddCompetitionModalComponent;
  let fixture: ComponentFixture<AddCompetitionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompetitionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompetitionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
