import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/carService/car.service";
import {Car} from "../../intefaces/Car";


@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.getCars()
  }

  getCars() {
    this.carService.getAllCars().subscribe(makinat => this.cars = makinat);
  }
}
