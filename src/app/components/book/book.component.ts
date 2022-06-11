import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../services/carService/car.service";
import {Car} from "../../intefaces/Car";
import {BookFromAngularService} from "../../services/bookService/book-from-angular.service";
import {BookingForm} from "../../intefaces/BookingForm";
import {Booking} from "../../intefaces/Booking";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public cars?: Car[];
  @Input() carId!: number;
  public bookings?: Booking[];

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
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
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
    this.invalidDates = [today, invalidDate];
    let stringId = this.router1.snapshot.paramMap.get("id");
    let id = Number(stringId);
    this.getBookingByCarId(id)
  }


  public addBookingForm() {
    console.log(this.carId);

    if (this.rangeDates && this.email) {
      let bookingForm;
      bookingForm = new BookingForm(this.carId, this.rangeDates[0], this.rangeDates[1], this.email)
      this.bookAngular.postBooking(bookingForm).subscribe({
        next: (result) => {
          console.info(result)
          alert(result.message)

        },
        error: err => console.error(err)
      })

    } else {
      alert("Please fill in required information!")
    }
  }

  public getCars() {
    this.carService.getAllCars().subscribe(car => this.cars = car);
  }
  getBookingByCarId(id: number) {
    return this.carService.getBookingByCarId(id).subscribe(bookings => this.bookings = bookings);
  }
}
