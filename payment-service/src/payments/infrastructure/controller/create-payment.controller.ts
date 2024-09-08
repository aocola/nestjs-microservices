import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreatePaymentService } from 'src/payments/applicatiton/use-case/create-payment.service';
import { CreatePaymentHttpDto } from './dto/create-payment-http.dto';
import { MessagePattern } from '@nestjs/microservices';
import { ResponseDto } from 'src/common/dto/response.dto';


@Controller('payments')
export class CreatePaymentController {
    constructor(private createService: CreatePaymentService){}

    @MessagePattern('TicketReserved')
    async handleProcessOrder(dto: CreatePaymentHttpDto) {
        const success = await this.createService.execute(dto);
        if(success){
            return ResponseDto.success(null, "Success payment", HttpStatus.OK);
        }
        return ResponseDto.error("Payment Error", "Invalid Card", HttpStatus.INTERNAL_SERVER_ERROR )
  }
}