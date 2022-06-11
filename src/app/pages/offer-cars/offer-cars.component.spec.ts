import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCarsComponent } from './offer-cars.component';

describe('OfferCarsComponent', () => {
  let component: OfferCarsComponent;
  let fixture: ComponentFixture<OfferCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
