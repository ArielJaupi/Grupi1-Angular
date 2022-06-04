import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() onSelectCity = new EventEmitter()
  public cityId?: string

  constructor() {
  }

  public citySelect (event: any) {
    this.onSelectCity.emit(event.target.value)
  }

  public search () {
    if (this.cityId) {
      // Navigate to list component with city id
      console.info(this.cityId)
    }
    else {
      alert("Please select a city!")
    }
  }
}

