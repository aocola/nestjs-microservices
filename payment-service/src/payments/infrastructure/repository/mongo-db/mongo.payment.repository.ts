import { InjectModel } from "@nestjs/mongoose";
import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { PaymentAttributes, Payment as PaymentEntity} from "src/payments/domain/entities/payment.entity";
import { PaymentRepository } from "src/payments/domain/repository/payment.repository";
import { Payment } from "./schema/payment.schema";
import { Model } from "mongoose";
import { Card } from "./schema/cards.schema";



@CustomInjectable()
export class MongoPaymentRepository implements PaymentRepository {

    constructor(
        @InjectModel(Payment.name) private paymentModel: Model<Payment>,
        @InjectModel(Card.name) private cardModel: Model<Card>
    ){}

    async create(payment: PaymentAttributes): Promise<boolean> {
        try {
            console.log("MongoPaymentRepository", payment);
            const card = await this.getCard(payment);
            const transaction = async () => {
                const createPayment = new this.paymentModel(payment);
                await createPayment.save();
                return true;
            }

            if(!card || card.status){
                const value = Math.random();
                if(card && card.status)
                    return transaction();
                else if(value>0.2){
                    const card = new this.cardModel({cardNumber: payment.cardNumber, cardName: payment.cardName, cardExpDate: payment.cardExpDate, status:true});
                    card.save();
                    return transaction();
                }else{
                    const card = new this.cardModel({cardNumber: payment.cardNumber, cardName: payment.cardName, cardExpDate: payment.cardExpDate, status:false});
                    card.save();
                    return false;
                }
            }   
            return false;
        } catch (error) {
            return false;
        }
    }

    async getById(id: string): Promise<PaymentEntity | null> {
        const payment = await this.paymentModel.findById(id).exec();
        return payment?this.mapToEntity(payment):null;
    }

    private getProperties(payment: PaymentAttributes){
        return { 
            cardName: payment.cardName, 
            cardNumber: payment.cardNumber, 
            cardExpDate: payment.cardExpDate };
    }

    private async getCard(payment: PaymentAttributes):Promise<Card>{
        const card = await this.cardModel.findOne(this.getProperties(payment)).exec();
        return card;
    }

    private mapToEntity(document: any): PaymentEntity {
        const paymentEntity = new PaymentEntity({
            id: document._id?.toString(),  // Convierte ObjectId a string
            ticketId: document.ticketId,  // ID del ticket relacionado con el pago
            price: document.price,  // Precio del pago
            currency: document.currency,  // Moneda utilizada
            paymentMethod: document.paymentMethod,  // Método de pago (tarjeta, PayPal, etc.)
            paymentStatus: document.paymentStatus,  // Estado del pago (pendiente, completado, etc.)
            cardNumber: document.cardNumber,  // Número de la tarjeta
            cardExpDate: document.cardExpDate,  // Fecha de expiración de la tarjeta
            cardName: document.cardName,  // Nombre del titular de la tarjeta
            createdAt: new Date(document.createdAt),  // Fecha de creación
            updatedAt: new Date(document.updatedAt),  // Fecha de última actualización
        });
    
        return paymentEntity;
    }
}