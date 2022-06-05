import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCarsComponent } from './green-cars.component';

describe('GreenCarsComponent', () => {
  let component: GreenCarsComponent;
  let fixture: ComponentFixture<GreenCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
