import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {HomeComponent} from './pages/home/home.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SearchFormComponent} from './components/search-form/search-form.component';
import {FormsModule} from "@angular/forms";
import {FooterComponent} from './components/footer/footer.component';
import {AllCarsComponent} from './pages/all-cars/all-cars.component';
import {DataViewModule} from 'primeng/dataview';
import {CarsByLcoationComponent} from './pages/cars-by-lcoation/cars-by-lcoation.component';
import {RatingModule} from 'primeng/rating';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FAQComponent} from './pages/faq/faq.component';
import {HttpClientModule} from "@angular/common/http";
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {ChipModule} from "primeng/chip";
import {GreenCarsComponent} from './pages/green-cars/green-cars.component';
import {BookComponent} from './components/book/book.component';
import {CalendarModule} from "primeng/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FieldsetModule} from 'primeng/fieldset';
import {OfferCarsComponent} from './pages/offer-cars/offer-cars.component';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {SupportComponent} from './pages/support/support.component';
import {BookingDetailsComponent} from './components/booking-details/booking-details.component';
import {TimelineModule} from 'primeng/timeline';
import {TimelineComponent} from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    SearchFormComponent,
    FooterComponent,
    AllCarsComponent,
    CarsByLcoationComponent,
    FAQComponent,
    CarDetailsComponent,
    GreenCarsComponent,
    BookComponent,
    OfferCarsComponent,
    SupportComponent,
    BookingDetailsComponent,
    TimelineComponent,


  ],
  imports: [
    CalendarModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    RatingModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    HttpClientModule,
    DataViewModule,
    ChipModule,
    BrowserAnimationsModule,
    FieldsetModule,
    DropdownModule,
    CardModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
