import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../intefaces/Car";
import {CarService} from "../../services/carService/car.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  @Input() car ?: Car;


  constructor(private carService: CarService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let stringId = this.route.snapshot.paramMap.get("id");
    let id = Number(stringId);
    this.getCarById(id);
  }

  getId(): number {
    let stringId = this.route.snapshot.paramMap.get("id");
    return Number(stringId);
  }

  getCarById(id: number) {
    return this.carService.getCarById(id).subscribe(car => this.car = car);
  }


}
