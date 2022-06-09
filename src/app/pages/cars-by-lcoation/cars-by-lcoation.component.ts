import {Component, OnInit} from '@angular/core';
import {Car} from "../../intefaces/Car";
import {CarService} from "../../services/carService/car.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cars-by-lcoation',
  templateUrl: './cars-by-lcoation.component.html',
  styleUrls: ['./cars-by-lcoation.component.scss']
})
export class CarsByLcoationComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    let car = this.router.snapshot.paramMap.get("location");
    // @ts-ignore
    this.getCars(car);

  }

  getCars(location: String) {
    this.carService.getCarByLocation(location).subscribe(cars => this.cars = cars)
  }
}
