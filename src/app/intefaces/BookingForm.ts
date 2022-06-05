

export class BookingForm{

  carId? : number;
  pickUpDate?: Date;
  dropUpDate?: Date;
  email?: String;

  constructor(id: number, pickUpDate: Date | undefined,
              dropUpDate: Date | undefined,
              email: String | undefined,
  ) {
    this.carId=id;
    this.pickUpDate=pickUpDate;
    this.dropUpDate=dropUpDate;
    this.email=email;
  }

}
