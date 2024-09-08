export class CreatePaymentDto {
    ticketId: string;
    price: Number;
    currency: string;
    paymentMethod:string;
    paymentStatus:string; //PENDING, COMPLETED, FAILED
    cardNumber: string;
    cardExpDate: string;
    cardName: string;
    createdAt: Date;
    updatedAt: Date;
  }
  