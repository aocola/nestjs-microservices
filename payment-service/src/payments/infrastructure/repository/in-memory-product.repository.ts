import { CustomInjectable } from 'src/common/dependecy-injection/injectable';
import { Payment, PaymentAttributes } from 'src/payments/domain/entities/payment.entity';
import { PaymentRepository } from 'src/payments/domain/repository/payment.repository';
import { v4 as uuidv4 } from 'uuid';


@CustomInjectable()
export class InMemoryPaymentRepository implements PaymentRepository {
    private paymentInMemory: PaymentAttributes[] = [];
    private unAcceptedCards: Object[] = [];
    private acceptedCards: Object[] = [];

    async create(payment: PaymentAttributes): Promise<boolean> {
        const transaction = () => {
            const id = uuidv4();
            const model = new Payment({id, ...payment});
            this.paymentInMemory.push(model.toValue());           
            return true;
        }
        const value = Math.random();
        
        if(this.getUnaccepted(payment)){
            if(this.getAccepted(payment))
                return transaction();
            else if(value>0.2){
                this.acceptedCards.push({cardNumber: payment.cardNumber, cardName: payment.cardName, cardExpDate: payment.cardExpDate});
                return transaction();
            }else{
                this.unAcceptedCards.push({cardNumber: payment.cardNumber, cardName: payment.cardName, cardExpDate: payment.cardExpDate});
                return false;
            }
        }   
        return false;
    }

    async getById(id: string): Promise<Payment | null> {
        const payment = this.paymentInMemory.find((payment)=>payment.id===id);
        return payment? new Payment(payment): null;
    }

    // Methods
    getAccepted(payment: PaymentAttributes):boolean{
        const accepted = this.acceptedCards.find(e=>{
            return e["cardNumber"]===payment.cardNumber && e["cardName"]===payment.cardName && e["cardExpDate"]===payment.cardExpDate
        });
        return accepted && true;
    }

    getUnaccepted(payment: PaymentAttributes):boolean{
        const unaccepted = this.unAcceptedCards.find(e=>{
            return e["cardNumber"]===payment.cardNumber && e["cardName"]===payment.cardName && e["cardExpDate"]===payment.cardExpDate
        });
        return !unaccepted && true;
    }
}