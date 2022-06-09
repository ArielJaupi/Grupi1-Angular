import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../../intefaces/City";


@Injectable({
  providedIn: 'root'
})
export class CityService {
  private url: string = "http://localhost:8080";
  private CITIES_URL: string = "/city/cities";


  constructor(private http: HttpClient) {
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url + this.CITIES_URL);
  }
}
