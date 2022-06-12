import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {City} from "../../intefaces/City";
import {Router} from "@angular/router";
import {CityService} from "../../services/cityService/city.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public cities: City[] = [];
  public cityName?: string

  constructor(private cityService: CityService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCities();
  }

  public getCities() {
    this.cityService.getCities().subscribe(city => this.cities = city);
  }

  public search() {
    if (this.cityName) {
      // Navigate to list component with city id
      this.router.navigate(["vehicle/location/" + this.cityName]);
      console.info(this.cityName)
    } else {
      alert("Please select a city!")
    }
  }
}

