import {Component, OnInit} from '@angular/core';
import {CityServiceService} from "../../services/city-service.service";
import {City} from "../../intefaces/City";



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

  private getCities(){
    this.cityService.getCities().subscribe(citie => this.cities = citie);
    console.log(this.cities)
  }


  }





