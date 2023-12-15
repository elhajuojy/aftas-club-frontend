import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankCardTrComponent } from './rank-card-tr.component';

describe('RankCardTrComponent', () => {
  let component: RankCardTrComponent;
  let fixture: ComponentFixture<RankCardTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankCardTrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankCardTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
