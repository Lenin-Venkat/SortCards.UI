import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortcardsComponent } from './sortcards.component';

describe('SortcardsComponent', () => {
  let component: SortcardsComponent;
  let fixture: ComponentFixture<SortcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
