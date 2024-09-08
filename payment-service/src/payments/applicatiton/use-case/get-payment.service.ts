import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { PaymentNotFoundException } from "src/payments/domain/exceptions/payment-not-found";
import { PaymentRepository } from "src/payments/domain/repository/payment.repository";

@CustomInjectable()
export class GetPaymentService {
    constructor(private readonly paymentRepository: PaymentRepository){}

    async execute(id: string): Promise<object> {
        const payment = await this.paymentRepository.getById(id);
        if(!payment) {
            throw new PaymentNotFoundException(id);
        }
        return payment.toValue();
    }
}