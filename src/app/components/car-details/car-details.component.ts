import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../../services/bookService/book.service";
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../intefaces/Car";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  @Input() car !: Car;

  constructor(private carService: CarService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let stringId = this.route.snapshot.paramMap.get("id");
    let id = Number(stringId);
    this.getCarById(id);
  }

  getCarById(id: number) {
    return this.carService.getCarById(id).subscribe(car => this.car = car);
  }

  bookCar(addForm: Car) {
    /* this.bookService.addBooking(addForm);*/
  }
}
