import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsByLcoationComponent } from './cars-by-lcoation.component';

describe('CarsByLcoationComponent', () => {
  let component: CarsByLcoationComponent;
  let fixture: ComponentFixture<CarsByLcoationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsByLcoationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsByLcoationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
