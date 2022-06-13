import {Component, OnInit} from '@angular/core';
import {BookingDetailsService} from "../../services/bookingDetailsService/booking-details.service";
import {Booking} from "../../intefaces/Booking";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  uuid?: string;

  constructor() {
  }
}
