import {Component, OnInit} from '@angular/core';
import {BookingDetailsService} from "../../services/bookingDetailsService/booking-details.service";
import {Booking} from "../../intefaces/Booking";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  booking?: Booking;

  constructor(private bookingDetailsService: BookingDetailsService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    let uuid = this.route.snapshot.paramMap.get("uuid")
    this.getBookingWithUUID(uuid)
  }


  getBookingWithUUID(uuid: string | null) {
    this.bookingDetailsService.getBookingWithUUID(uuid).subscribe(booking => this.booking = booking);
  }
}
