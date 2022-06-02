import {Car} from "./Car";

export interface Booking {
  id: number;
  pickUpDate: number;
  dropUpDate: number;
  totalPrice: number;
  car: Car;
}
