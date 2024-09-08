class airportDto {
    airportCode: string;
    airportName: string;
    city: string;
    country: string;
    address: string;
    timeZone: string;
  }
  
  const airports: airportDto[] = [
    // Aeropuertos fuera de Latinoamérica
    {
      airportCode: "LHR",
      airportName: "London Heathrow Airport",
      city: "London",
      country: "United Kingdom",
      address: "Longford TW6, United Kingdom",
      timeZone: "Europe/London"
    },
    {
      airportCode: "JFK",
      airportName: "John F. Kennedy International Airport",
      city: "New York",
      country: "United States",
      address: "Queens, NY 11430, USA",
      timeZone: "America/New_York"
    },
    {
      airportCode: "NRT",
      airportName: "Narita International Airport",
      city: "Tokyo",
      country: "Japan",
      address: "Narita, Chiba 282-8601, Japan",
      timeZone: "Asia/Tokyo"
    },
    {
      airportCode: "SYD",
      airportName: "Sydney Kingsford Smith Airport",
      city: "Sydney",
      country: "Australia",
      address: "Mascot NSW 2020, Australia",
      timeZone: "Australia/Sydney"
    },
    {
      airportCode: "CDG",
      airportName: "Charles de Gaulle Airport",
      city: "Paris",
      country: "France",
      address: "95700 Roissy-en-France, France",
      timeZone: "Europe/Paris"
    },
    {
      airportCode: "DXB",
      airportName: "Dubai International Airport",
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Dubai - United Arab Emirates",
      timeZone: "Asia/Dubai"
    },
  
    // Aeropuertos en Latinoamérica
    {
      airportCode: "EZE",
      airportName: "Ministro Pistarini International Airport",
      city: "Buenos Aires",
      country: "Argentina",
      address: "Autopista Tte. Gral. Ricchieri Km 33.5, Buenos Aires, Argentina",
      timeZone: "America/Argentina/Buenos_Aires"
    },
    {
      airportCode: "GIG",
      airportName: "Rio de Janeiro–Galeão International Airport",
      city: "Rio de Janeiro",
      country: "Brazil",
      address: "Av. Vinte de Janeiro, Rio de Janeiro - RJ, Brazil",
      timeZone: "America/Sao_Paulo"
    },
    {
      airportCode: "MEX",
      airportName: "Mexico City International Airport",
      city: "Mexico City",
      country: "Mexico",
      address: "Peñón de los Baños, 15620 Ciudad de México, CDMX, Mexico",
      timeZone: "America/Mexico_City"
    },
    {
      airportCode: "SCL",
      airportName: "Comodoro Arturo Merino Benítez International Airport",
      city: "Santiago",
      country: "Chile",
      address: "Pudahuel, Santiago Metropolitan Region, Chile",
      timeZone: "America/Santiago"
    },
    {
      airportCode: "BOG",
      airportName: "El Dorado International Airport",
      city: "Bogotá",
      country: "Colombia",
      address: "Bogotá, Colombia",
      timeZone: "America/Bogota"
    },
  
    // Aeropuertos en Perú
    {
      airportCode: "LIM",
      airportName: "Jorge Chávez International Airport",
      city: "Lima",
      country: "Peru",
      address: "Callao 07031, Peru",
      timeZone: "America/Lima"
    },
    {
      airportCode: "CUZ",
      airportName: "Alejandro Velasco Astete International Airport",
      city: "Cusco",
      country: "Peru",
      address: "Avenida Velasco Astete S/N, Cusco, Peru",
      timeZone: "America/Lima"
    },
    {
      airportCode: "IQT",
      airportName: "Coronel FAP Francisco Secada Vignetta International Airport",
      city: "Iquitos",
      country: "Peru",
      address: "Av. Abelardo Quiñones 1320, Iquitos, Peru",
      timeZone: "America/Lima"
    },
    {
      airportCode: "AQP",
      airportName: "Rodríguez Ballón International Airport",
      city: "Arequipa",
      country: "Peru",
      address: "Av. Aviación 800, Cerro Colorado, Arequipa, Peru",
      timeZone: "America/Lima"
    },
    {
      airportCode: "TPP",
      airportName: "Cadete FAP Guillermo del Castillo Paredes Airport",
      city: "Tarapoto",
      country: "Peru",
      address: "Jirón Sargento Lores 514, Tarapoto, Peru",
      timeZone: "America/Lima"
    }
  ];

  export {airports}