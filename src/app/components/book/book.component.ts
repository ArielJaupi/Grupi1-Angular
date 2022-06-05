import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import{CarService} from "../../services/car.service";
import {Car} from "../../intefaces/Car";
import {BookFromAngularService} from "../../services/book-from-angular.service";
import {BookingForm} from "../../intefaces/BookingForm";



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  public cars?: Car[];
  public carId?: number

  constructor(private carService: CarService, private router: Router, private router1: ActivatedRoute,
              private bookAngular: BookFromAngularService) {
  }

  dates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  invalidDates?: Array<Date>
  range!: Date[];
  rangeDates!: Date[];
  es: any;
  public email?: String;
  pickUpDate?: Date;
  dropUpDate?: Date;



  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
    }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
  }


  public addBookingForm() {
    let idjuhu = 1;
    let bookingForm;
    bookingForm = new BookingForm(idjuhu, this.rangeDates[0], this.rangeDates[1], this.email)
    if (this.rangeDates) {
      this.bookAngular.postBooking(bookingForm).subscribe({
        next: (result) => {
          console.info(result)
        },
        error: err => console.error(err)
      })
      // Navigate to list component with city id

      alert("u beeeeee buking!")
    } else {
      alert("Please fill in required information!")
    }
  }

  public getCars() {
    this.carService.getAllCars().subscribe(car => this.cars = car);
  }
}
