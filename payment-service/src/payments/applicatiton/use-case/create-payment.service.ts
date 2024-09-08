import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { CreatePaymentDto } from "../dto/create-payment.dto";
import { Payment } from "src/payments/domain/entities/payment.entity";
import { PaymentRepository } from "src/payments/domain/repository/payment.repository";

@CustomInjectable()
export class CreatePaymentService {
    constructor(private readonly paymentRepository: PaymentRepository){}

    async execute(dto: CreatePaymentDto): Promise<boolean>{
        console.log("CreatePaymentService", dto);
        const partialPayment = Payment.create(dto);
        const success = await this.paymentRepository.create(partialPayment);
        return success;
    }
}