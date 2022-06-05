import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AllCarsComponent} from "./pages/all-cars/all-cars.component";
import {FAQComponent} from "./pages/faq/faq.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {ProveComponent} from "./components/prove/prove.component";
import {GreenCarsComponent} from "./pages/green-cars/green-cars.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "all cars", component: AllCarsComponent},
  {path: "green cars", component:GreenCarsComponent},
  {
    path: "FAQ", component: FAQComponent, children: [
      {path: "#question1", component: FAQComponent},
      {path: "#question2", component: FAQComponent},
      {path: "#question3", component: FAQComponent},
      {path: "#question4", component: FAQComponent}
    ]
  },
  {path: "car details", component: CarDetailsComponent},
  {path: "prove", component: ProveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
