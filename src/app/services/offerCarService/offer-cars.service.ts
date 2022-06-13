import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../../intefaces/Car";

@Injectable({
  providedIn: 'root'
})
export class OfferCarsService {
  private url: string = "http://localhost:8080";
  private offerCars: string = "/car/offer/true";

  constructor(private http: HttpClient) {
  }

  getOfferCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url + this.offerCars);
  }
}
