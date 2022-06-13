import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookingForm} from "../../intefaces/BookingForm";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookFromAngularService {
  private url: string = "http://localhost:8080/booking/newbooking";

  constructor(private http: HttpClient) {
  }


  postBooking(bookingForm: BookingForm): Observable<any> {
    const body = JSON.stringify(bookingForm);
    console.log(body);
    return this.http.post<BookingForm>(this.url, bookingForm);
  }

}

