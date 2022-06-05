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
import {ProveComponent} from './components/prove/prove.component';
import {GreenCarsComponent} from './pages/green-cars/green-cars.component';
import {BookComponent} from './components/book/book.component';
import {CalendarModule} from "primeng/calendar";
import { BrowserAnimationsModule } from
    "@angular/platform-browser/animations";


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
    ProveComponent,
    GreenCarsComponent,
    BookComponent,


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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
