import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AllCarsComponent} from "./pages/all-cars/all-cars.component";
import {FAQComponent} from "./pages/faq/faq.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {ProveComponent} from "./components/prove/prove.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "vehicles", component: AllCarsComponent},
  {path: "vehicles/:location", component: AllCarsComponent},
  {
    path: "faq", component: FAQComponent
  },
  {path: "vehicle-details/:id", component: CarDetailsComponent},
  {path: "prove", component: ProveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
