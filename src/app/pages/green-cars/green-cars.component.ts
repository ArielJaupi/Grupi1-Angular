import {Component, OnInit} from '@angular/core';
import {Car} from "../../intefaces/Car";
import {GreenCarsService} from "../../services/greenCarService/green-cars.service";

@Component({
  selector: 'app-green-cars',
  templateUrl: './green-cars.component.html',
  styleUrls: ['./green-cars.component.scss']
})
export class GreenCarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(private greenService: GreenCarsService) {
  }

  ngOnInit(): void {
    this.getGreenCars()
  }

  getGreenCars() {
    this.greenService.getGreenCars().subscribe(car => this.cars = car);
  }
}
