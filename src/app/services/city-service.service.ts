import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  private url: string = "http://localhost:8080";
  private CITIES_URL: string = "/city/cities";


  constructor(private http: HttpClient) {
  }

  getCities() {
    return this.http.get(this.url + this.CITIES_URL);
  }
}
