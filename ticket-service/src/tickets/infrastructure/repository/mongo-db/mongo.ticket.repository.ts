import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CustomInjectable } from "src/common/dependecy-injection/Injectable";
import { TicketRepository } from "src/tickets/domain/repository/ticket.repository";
import { Ticket } from "./schema/ticket.schema";
import { TicketAttributes, Ticket as TicketEntity } from "src/tickets/domain/entities/ticket.entity";

@CustomInjectable()
export class MongoTicketRepository implements TicketRepository {

    constructor(
        @InjectModel(Ticket.name) private ticketModel: Model<Ticket>
    ){}
    // Crear un nuevo ticket
    async create(ticket: TicketAttributes): Promise<TicketEntity> {
        const createdTicket = new this.ticketModel(ticket);
        const document = await createdTicket.save();  // Guarda el nuevo ticket en MongoDB
        return this.mapToEntity(document);
    }

    // Obtener un ticket por su ID
    async getById(id: string): Promise<TicketEntity | null> {
        const ticket = await this.ticketModel.findById(id).exec();  // Busca el ticket por ID en MongoDB
        return ticket ? this.mapToEntity(document) : null;  // Devuelve el ticket o null si no existe
    }

    // Cancelar un ticket
    async cancel(ticketId: string): Promise<void> {
        const ticket = await this.ticketModel.findById(ticketId).exec();  // Busca el ticket por ID
        if (ticket) {
            ticket.status = 'Canceled';  // Cambia el estado a "Canceled"
            await ticket.save();  // Guarda los cambios en MongoDB
        }
    }

    // Modificar un ticket
    async modifyTicket(ticket: TicketAttributes): Promise<object> {
        const updatedTicket = await this.ticketModel.findByIdAndUpdate(ticket.id, ticket, { new: true }).exec();  // Actualiza el ticket
        return updatedTicket ? updatedTicket : {};
    }

    private mapToEntity(document: any): TicketEntity {
        const ticketEntity = new TicketEntity({
            id: document._id?.toString(),  // Convierte ObjectId a string
            passengers: document.passengers || [],  // Lista de pasajeros
            flightId: document.flightId,  // ID del vuelo
            price: document.price,  // Precio del boleto
            paymentMethod: document.paymentMethod,  // Método de pago
            paymentStatus: document.paymentStatus,  // Estado del pago
            status: document.status,  // Estado del boleto (reservado, confirmado, etc.)
            class: document.class,  // Clase del boleto (economy, business, etc.)
            seats: document.seats || [],  // Asientos reservados
            baggageAllowance: document.baggageAllowance,  // Equipaje permitido
            createdAt: new Date(document.createdAt),  // Fecha de creación
            updatedAt: new Date(document.updatedAt),  // Fecha de última actualización
        });
    
        return ticketEntity;
    }
}
