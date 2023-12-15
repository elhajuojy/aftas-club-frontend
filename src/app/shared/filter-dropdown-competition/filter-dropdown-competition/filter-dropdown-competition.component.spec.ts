import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDropdownCompetitionComponent } from './filter-dropdown-competition.component';

describe('FilterDropdownCompetitionComponent', () => {
  let component: FilterDropdownCompetitionComponent;
  let fixture: ComponentFixture<FilterDropdownCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDropdownCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDropdownCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
