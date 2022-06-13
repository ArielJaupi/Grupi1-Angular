import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../../intefaces/Car";

@Injectable({
  providedIn: 'root'
})
export class GreenCarsService {
  private url: string = "http://localhost:8080";
  private greenCars: string = "/car/green/true";

  constructor(private http: HttpClient) {

  }

  getGreenCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url + this.greenCars);
  }
}
