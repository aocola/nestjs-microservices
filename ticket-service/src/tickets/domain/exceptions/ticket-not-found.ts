export class TicketNotFoundException extends Error{
    constructor(public readonly id:string){
        super(`Ticket not found ${id}`);
    }
}