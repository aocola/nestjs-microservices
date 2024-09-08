import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetPaymentService } from 'src/payments/applicatiton/use-case/get-payment.service';
import { GetPaymentByIdHttpDto } from './dto/get-payment-http.dto';

@Controller('payments')
export class GetPaymentByIdController {
    constructor(private service: GetPaymentService){}

    @Get(':id')
    async run(@Param() dto: GetPaymentByIdHttpDto): Promise<object> {
        try {
            return await this.service.execute(dto.id);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}