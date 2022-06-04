import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {City} from "../../intefaces/City";
import {Router} from "@angular/router";
import {CityService} from "../../services/city.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() onSelectCity = new EventEmitter()
  public cities?: City[];
  public cityId?: string

  constructor(private cityService: CityService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCities();
  }

  public getCities() {
    this.cityService.getCities().subscribe(city => this.cities = city);
  }

  public search() {
    if (this.cityId) {
      // Navigate to list component with city id
      this.router.navigate(["vehicle/location/" + this.cityId]);
      console.info(this.cityId)
    } else {
      alert("Please select a city!")
    }
  }
}

