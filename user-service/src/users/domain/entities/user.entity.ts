export interface UserAttributes {
    id?: string;
    name: string;
    lastName: string;
    address:string;
    phone:string;
    country: string;
    passport: string;
    password?: string;
    email:string;
    numberFlights: number;
    hasFlight: boolean;
    status: string;
}


export class User {
    constructor(private attributes: UserAttributes){}

    static create(createUser: {
        name: string;
        passport: string;
        country: string;
        lastName: string;
        address:string;
        phone:string;
        email:string;
        password?: string;
    }): UserAttributes {
        return {
            name: createUser.name,
            lastName: createUser.lastName,
            address: createUser.address,
            phone: createUser.phone,
            email: createUser.email,
            country: createUser.country,
            passport: createUser.passport,
            password: createUser.password,
            numberFlights: 0,
            hasFlight: false,
            status: "INACTIVE",
        };
    }

    toValue(): UserAttributes {
        return {
            id: this.attributes.id,
            name: this.attributes.name,
            lastName: this.attributes.lastName,
            address: this.attributes.address,
            phone: this.attributes.phone,
            email: this.attributes.email,
            country: this.attributes.country,
            passport: this.attributes.passport,
            numberFlights: this.attributes.numberFlights,
            hasFlight: this.attributes.hasFlight,
            status: this.attributes.status,
        };
    }
}
