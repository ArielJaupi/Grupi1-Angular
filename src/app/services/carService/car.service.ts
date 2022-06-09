import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../../intefaces/Car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url: string = "http://localhost:8080";
  private carByLocation: string = "/car/location/";
  private CARS_URL: string = "/car/cars";
  private greenCars: string = "/car/green/true";
  private offerCars: string = "/car/offer"
  private carById: string = "/car/id/"

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

  // getGreenCars(): Observable<Car[]> {
  //   return this.http.get<Car[]>(this.url + this.greenCars);
  // }

  getOfferCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url + this.offerCars);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(this.url + this.carById + id);
  }
}
