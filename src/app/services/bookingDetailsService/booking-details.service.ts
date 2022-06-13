import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../../intefaces/Booking";

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {
  private url: string = "http://localhost:8080";
  private bookingWithUUID: string = "/booking/bookingByUuid/";

  constructor(private http: HttpClient) {
  }

    getBookingWithUUID(uuid: string | null): Observable<Booking> {
    return this.http.get<Booking>(this.url + this.bookingWithUUID + uuid);
  }
}
