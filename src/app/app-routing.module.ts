import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AllCarsComponent} from "./pages/all-cars/all-cars.component";
import {FAQComponent} from "./pages/faq/faq.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {GreenCarsComponent} from "./pages/green-cars/green-cars.component";
import {CarsByLcoationComponent} from "./pages/cars-by-lcoation/cars-by-lcoation.component";
import {OfferCarsComponent} from "./pages/offer-cars/offer-cars.component";
import {SupportComponent} from "./pages/support/support.component";
import {BookingDetailsComponent} from "./components/booking-details/booking-details.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "green-cars", component: GreenCarsComponent},
  {path: "offer-cars", component: OfferCarsComponent},
  {path: "vehicles", component: AllCarsComponent},
  {path: "vehicles/:location", component: AllCarsComponent},
  {
    path: "faq", component: FAQComponent
  },
  {path: "vehicle-details/:id", component: CarDetailsComponent},
  {path: "booking-details/:uuid", component: BookingDetailsComponent},
  {path: "vehicle/location/:location", component: CarsByLcoationComponent},
  {path: "support", component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
