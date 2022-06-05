import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../../intefaces/Car";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseURL: string = "http://localhost:8080/";
  constructor(private http: HttpClient) {
  }

  addBooking(car:Car): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(car);
    console.log(body)
    return this.http.post(this.baseURL + 'booking', body,{'headers':headers})
  }
}
