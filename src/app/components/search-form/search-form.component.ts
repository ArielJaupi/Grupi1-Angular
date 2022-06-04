import {Component, OnInit} from '@angular/core';
import {CityServiceService} from "../../services/city-service.service";
import {City} from "../../intefaces/City";
import {Observable} from "rxjs";



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit  {

  cities!: City[] ;

  selectedCity!: City;

  constructor(private cityService: CityServiceService) { }

  ngOnInit(): void {
    this.getCities()
    }


  // @ts-ignore
  private getCities() : Observable<City[]>{

    // @ts-ignore
    this.cityService.getCities<City[]>().subscribe(cities => this.cities = cities)

    console.log(this.cities)
  }


  }





