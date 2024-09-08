
import * as moment from 'moment';
import { CreateFlightDto } from '../dto/create-flight.dto';
import { FlightRepository } from 'src/flights/domain/repository/flight.repository';
import { CustomInjectable } from 'src/common/dependecy-injection/injectable';

@CustomInjectable()
export class GenerateFlightService {
  constructor(private readonly flightRepository: FlightRepository){}

  private flights: CreateFlightDto[] = [];
  // Lista de tipos de aviones y capacidad de asientos
  private aircrafts = [
    { type: 'Airbus A320', seats: 180 },
    { type: 'Boeing 737', seats: 160 },
    { type: 'Embraer E190', seats: 100 },
    { type: 'Airbus A330', seats: 300 },
    { type: 'Boeing 777', seats: 350 },
  ];
  // Generar vuelos
  execute(
    airports: { airportCode: string }[],
    n: number,
    m: number,
    months: number,
  ): CreateFlightDto[] {
    const flights: CreateFlightDto[] = [];
    const gates = ['A1', 'B2', 'C3', 'D4'];
    const terminals = ['T1', 'T2', 'T3'];

    const currentDate = moment(); // fecha actual

    // Generar vuelos entre "n" y "m" por día para cada par de aeropuertos
    for (let i = 0; i < airports.length; i++) {
      for (let j = 0; j < airports.length; j++) {
        if (i !== j) {
          for (let day = 0; day < months * 30; day++) {
            const numberOfFlights = this.getRandomInt(n, m);
            for (let k = 0; k < numberOfFlights; k++) {
              const departureAirport = airports[i].airportCode;
              const arrivalAirport = airports[j].airportCode;

              // Seleccionar avión aleatorio
              const aircraft = this.aircrafts[this.getRandomInt(0, this.aircrafts.length - 1)];
              
              // Generar horas de salida y llegada
              const departureTime = currentDate.clone().add(day, 'days').add(this.getRandomInt(0, 24), 'hours');
              const duration = this.calculateFlightDuration(departureAirport, arrivalAirport); // Duración realista
              const arrivalTime = departureTime.clone().add(duration, 'hours');

              // Crear el vuelo
              const flight: CreateFlightDto = {
                flightNumber: `FL${this.getRandomInt(1000, 9999)}`,
                departureAirport,
                arrivalAirport,
                departureTime: departureTime.toDate(),
                arrivalTime: arrivalTime.toDate(),
                aircraftType: aircraft.type,
                numberOfSeats: aircraft.seats,
                availableSeats: 0,
                gate: gates[this.getRandomInt(0, gates.length - 1)],
                terminal: terminals[this.getRandomInt(0, terminals.length - 1)],
                status: 'Scheduled', // Otros estados pueden ser 'Delayed', 'Cancelled', etc.
                duration,
              };

              flights.push(flight);
            }
          }
        }
      }
    }

    return flights;
  }

  // Generar un número entero aleatorio entre min y max (inclusive)
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   // Función para calcular la duración del vuelo basada en la distancia aproximada
   private calculateFlightDuration(departureAirport: string, arrivalAirport: string): number {
    // Valores aproximados de duración de vuelos en horas
    const shortFlightDuration = this.getRandomInt(1, 3); // Vuelos cortos
    const mediumFlightDuration = this.getRandomInt(3, 7); // Vuelos medianos
    const longFlightDuration = this.getRandomInt(7, 15); // Vuelos largos

    // Comparar pares de aeropuertos para asignar duración realista (simulado)
    const shortRoutes = [
      ['LIM', 'CUZ'], ['JFK', 'LHR'], ['CUZ', 'LIM']
    ];
    const mediumRoutes = [
      ['LIM', 'JFK'], ['LHR', 'JFK'], ['CUZ', 'LHR']
    ];
    const longRoutes = [
      ['LHR', 'LIM'], ['JFK', 'LIM'], ['CUZ', 'JFK']
    ];

    if (this.isRouteInList(departureAirport, arrivalAirport, shortRoutes)) {
      return shortFlightDuration;
    }

    if (this.isRouteInList(departureAirport, arrivalAirport, mediumRoutes)) {
      return mediumFlightDuration;
    }

    if (this.isRouteInList(departureAirport, arrivalAirport, longRoutes)) {
      return longFlightDuration;
    }

    // Si no se encuentra en las rutas predefinidas, se asume un vuelo mediano
    return mediumFlightDuration;
  }

  // Función auxiliar para verificar si una ruta está en una lista
  private isRouteInList(departure: string, arrival: string, routeList: string[][]): boolean {
    return routeList.some(route =>
      (route[0] === departure && route[1] === arrival) || 
      (route[0] === arrival && route[1] === departure)
    );
  }
}


