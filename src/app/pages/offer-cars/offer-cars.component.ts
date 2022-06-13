import {Component, OnInit} from '@angular/core';
import {Car} from "../../intefaces/Car";
import {OfferCarsService} from "../../services/offerCarService/offer-cars.service";

@Component({
  selector: 'app-offer-cars',
  templateUrl: './offer-cars.component.html',
  styleUrls: ['./offer-cars.component.scss']
})
export class OfferCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private offerService: OfferCarsService) {
  }

  ngOnInit(): void {
    this.getOfferCars()
  }

  private getOfferCars() {
    this.offerService.getOfferCars().subscribe(cars => this.cars = cars);
  }

}
