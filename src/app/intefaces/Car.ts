import {City} from "./City";

export interface Car {
  id: number;
  carType: string;
  power: number;
  color: string;
  seats: number;
  kambio: string;
  price: number;
  year0fRelease: number;
  booked: boolean;
  greenCar: boolean;
  offerCar: boolean;
  imagePath: String;
  city: City;
}
