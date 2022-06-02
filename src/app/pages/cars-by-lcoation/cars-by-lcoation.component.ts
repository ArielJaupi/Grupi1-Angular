import {Component, OnInit} from '@angular/core';
import {Car} from "../../intefaces/Car";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-cars-by-lcoation',
  templateUrl: './cars-by-lcoation.component.html',
  styleUrls: ['./cars-by-lcoation.component.scss']
})
export class CarsByLcoationComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {

  }
  getCars(location: String) {
    this.carService.getCarByLocation(location).subscribe(cars => this.cars = cars)
  }
}
