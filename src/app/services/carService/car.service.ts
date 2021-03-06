import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../../intefaces/Car";
import {Booking} from "../../intefaces/Booking";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url: string = "http://localhost:8080";
  private carByLocation: string = "/car/location/";
  private CARS_URL: string = "/car/cars";
  private carById: string = "/car/id/"
  private bookingByCarId: string = "/booking/bookingByCarId/"

  constructor(private http: HttpClient) {
  }

  getAllCars(): Observable<Car []> {
    return this.http.get<Car[]>(this.url + this.CARS_URL);
  }

  getCarByLocation(location: String): Observable<Car[]> {
    console.log(this.url);
    // @ts-ignore
    return this.http.get<Car[]>(this.url + this.carByLocation + location)
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(this.url + this.carById + id);
  }

  getBookingByCarId(id: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.url + this.bookingByCarId + id);
  }

}
