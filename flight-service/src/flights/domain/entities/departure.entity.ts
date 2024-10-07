export interface DepartureAttributes {
    airportCode: string;
    name:string;
    city: string;
    country:string;
    timeZone:string;
    airportType:string;
}

export class Departure {
    constructor(private attributes: DepartureAttributes){}

    static create(createDeparture: {
        airportCode: string,
        name:string;
        city: string,
        country:string,
        timeZone:string,
        airportType:string
    }): DepartureAttributes {
        return {
            airportCode: createDeparture.airportCode,
            name:createDeparture.name,
            city: createDeparture.city,
            country: createDeparture.country,
            timeZone: createDeparture.timeZone,
            airportType: createDeparture.airportType,
        };
    }

    toValue(): DepartureAttributes {
        return {
            airportCode: this.attributes.airportCode,
            name: this.attributes.name,
            city: this.attributes.city,
            country: this.attributes.country,
            timeZone: this.attributes.timeZone,
            airportType: this.attributes.airportType,
        };
    }
}
