export class BookingForm {

  carId!: number | undefined;
  pickUpDate?: Date;
  dropUpDate?: Date;
  email?: String;

  constructor(id: number | undefined, pickUpDate: Date | undefined,
              dropUpDate: Date | undefined,
              email: String | undefined,
  ) {
    this.carId = id;
    this.pickUpDate = pickUpDate;
    this.dropUpDate = dropUpDate;
    this.email = email;
  }

}
