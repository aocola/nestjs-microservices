import { Payment, PaymentAttributes } from "../entities/payment.entity";

export abstract class PaymentRepository {
    abstract create(payment: PaymentAttributes): Promise<boolean>;
    abstract getById(id: string): Promise<Payment | null>;
}