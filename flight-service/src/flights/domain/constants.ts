import { Departure, DepartureAttributes } from "./entities/departure.entity";

const shortRoutes = [
    ['LIM', 'CUZ'], ['JFK', 'LHR'], ['CUZ', 'LIM']
  ];
  const mediumRoutes = [
    ['LIM', 'JFK'], ['LHR', 'JFK'], ['CUZ', 'LHR']
  ];
  const longRoutes = [
    ['LHR', 'LIM'], ['JFK', 'LIM'], ['CUZ', 'JFK']
  ];

  const airports = [
    {
        airportCode: 'LHR',
      name: 'Heathrow Airport',
      city: 'London',
      country: 'United Kingdom',
      timeZone: 'Europe/London',
      airportType: 'International',
    },
    {
      airportCode: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
      country: 'USA',
      timeZone: 'America/New_York',
      airportType: 'International',
    },
    {
      airportCode: 'LIM',
      name: 'Jorge Chávez International Airport',
      city: 'Lima',
      country: 'Peru',
      timeZone: 'America/Lima',
      airportType: 'International',
    },
    {
      airportCode: 'CUZ',
      name: 'Alejandro Velasco Astete International Airport',
      city: 'Cusco',
      country: 'Peru',
      timeZone: 'America/Lima',
      airportType: 'Domestic',
    },
  ];

  const getAirportCodes = () => {
    return airports.map(a=>{
        return {airportCode: a.airportCode};
    });
  } 
  export{
    shortRoutes,
    mediumRoutes,
    longRoutes,
    airports,
    getAirportCodes
  }