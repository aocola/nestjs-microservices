export class FlightNotFoundException extends Error{
    constructor(public readonly id:string){
        super(`Flight(s) not found ${id}`);
    }
}