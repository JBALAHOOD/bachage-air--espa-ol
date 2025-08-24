// Comprehensive airline baggage policies database
export const airlinePolicies = {
  // European Airlines
  'IB': { // Iberia
    maxLength: 56, maxWidth: 45, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 126,
    name: 'Iberia', region: 'Europe'
  },
  'FR': { // Ryanair
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Ryanair', region: 'Europe'
  },
  'VY': { // Vueling
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Vueling', region: 'Europe'
  },
  'UX': { // Air Europa
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Air Europa', region: 'Europe'
  },
  'LH': { // Lufthansa
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Lufthansa', region: 'Europe'
  },
  'AF': { // Air France
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 12, maxTotalDimensions: 115,
    name: 'Air France', region: 'Europe'
  },
  'BA': { // British Airways
    maxLength: 56, maxWidth: 45, maxHeight: 25, maxWeight: 23, maxTotalDimensions: 126,
    name: 'British Airways', region: 'Europe'
  },
  'KL': { // KLM
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 12, maxTotalDimensions: 115,
    name: 'KLM', region: 'Europe'
  },
  'TK': { // Turkish Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Turkish Airlines', region: 'Europe'
  },
  'AZ': { // Alitalia
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Alitalia', region: 'Europe'
  },
  'LX': { // Swiss International Air Lines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Swiss International Air Lines', region: 'Europe'
  },
  'OS': { // Austrian Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Austrian Airlines', region: 'Europe'
  },
  'SK': { // SAS Scandinavian Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'SAS Scandinavian Airlines', region: 'Europe'
  },
  'AY': { // Finnair
    maxLength: 56, maxWidth: 45, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 126,
    name: 'Finnair', region: 'Europe'
  },
  'TP': { // TAP Air Portugal
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 8, maxTotalDimensions: 115,
    name: 'TAP Air Portugal', region: 'Europe'
  },
  'A3': { // Aegean Airlines
    maxLength: 56, maxWidth: 45, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 126,
    name: 'Aegean Airlines', region: 'Europe'
  },
  'DY': { // Norwegian Air
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 10, maxTotalDimensions: 118,
    name: 'Norwegian Air', region: 'Europe'
  },
  'U2': { // easyJet
    maxLength: 56, maxWidth: 45, maxHeight: 25, maxWeight: 15, maxTotalDimensions: 126,
    name: 'easyJet', region: 'Europe'
  },
  'W6': { // Wizz Air
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 10, maxTotalDimensions: 118,
    name: 'Wizz Air', region: 'Europe'
  },
  'SN': { // Brussels Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Brussels Airlines', region: 'Europe'
  },

  // Middle Eastern Airlines
  'EK': { // Emirates
    maxLength: 55, maxWidth: 38, maxHeight: 22, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Emirates', region: 'Middle East'
  },
  'QR': { // Qatar Airways
    maxLength: 50, maxWidth: 37, maxHeight: 25, maxWeight: 7, maxTotalDimensions: 112,
    name: 'Qatar Airways', region: 'Middle East'
  },
  'EY': { // Etihad Airways
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Etihad Airways', region: 'Middle East'
  },
  'SV': { // Saudi Arabian Airlines
    maxLength: 50, maxWidth: 40, maxHeight: 25, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Saudi Arabian Airlines', region: 'Middle East'
  },
  'RJ': { // Royal Jordanian
    maxLength: 51, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 110,
    name: 'Royal Jordanian', region: 'Middle East'
  },
  'KU': { // Kuwait Airways
    maxLength: 50, maxWidth: 40, maxHeight: 25, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Kuwait Airways', region: 'Middle East'
  },
  'WY': { // Oman Air
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Oman Air', region: 'Middle East'
  },
  'GF': { // Gulf Air
    maxLength: 50, maxWidth: 40, maxHeight: 25, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Gulf Air', region: 'Middle East'
  },
  'FZ': { // flydubai
    maxLength: 55, maxWidth: 38, maxHeight: 22, maxWeight: 7, maxTotalDimensions: 115,
    name: 'flydubai', region: 'Middle East'
  },
  'G9': { // Air Arabia
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Air Arabia', region: 'Middle East'
  },

  // North American Airlines
  'AA': { // American Airlines
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 10, maxTotalDimensions: 115,
    name: 'American Airlines', region: 'North America'
  },
  'DL': { // Delta Air Lines
    maxLength: 56, maxWidth: 35, maxHeight: 23, maxWeight: 10, maxTotalDimensions: 114,
    name: 'Delta Air Lines', region: 'North America'
  },
  'UA': { // United Airlines
    maxLength: 56, maxWidth: 35, maxHeight: 22, maxWeight: 10, maxTotalDimensions: 113,
    name: 'United Airlines', region: 'North America'
  },
  'WN': { // Southwest Airlines
    maxLength: 61, maxWidth: 41, maxHeight: 25, maxWeight: 23, maxTotalDimensions: 127,
    name: 'Southwest Airlines', region: 'North America'
  },
  'B6': { // JetBlue Airways
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 10, maxTotalDimensions: 115,
    name: 'JetBlue Airways', region: 'North America'
  },
  'AS': { // Alaska Airlines
    maxLength: 61, maxWidth: 41, maxHeight: 25, maxWeight: 23, maxTotalDimensions: 127,
    name: 'Alaska Airlines', region: 'North America'
  },
  'NK': { // Spirit Airlines
    maxLength: 56, maxWidth: 46, maxHeight: 25, maxWeight: 18, maxTotalDimensions: 127,
    name: 'Spirit Airlines', region: 'North America'
  },
  'F9': { // Frontier Airlines
    maxLength: 61, maxWidth: 41, maxHeight: 25, maxWeight: 16, maxTotalDimensions: 127,
    name: 'Frontier Airlines', region: 'North America'
  },
  'AC': { // Air Canada
    maxLength: 56, maxWidth: 23, maxHeight: 56, maxWeight: 10, maxTotalDimensions: 135,
    name: 'Air Canada', region: 'North America'
  },
  'WS': { // WestJet
    maxLength: 53, maxWidth: 38, maxHeight: 21, maxWeight: 10, maxTotalDimensions: 112,
    name: 'WestJet', region: 'North America'
  },

  // Latin American Airlines
  'LA': { // LATAM Airlines
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 115,
    name: 'LATAM Airlines', region: 'Latin America'
  },
  'AV': { // Avianca
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Avianca', region: 'Latin America'
  },
  'CM': { // Copa Airlines
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Copa Airlines', region: 'Latin America'
  },
  'AM': { // Aeromexico
    maxLength: 55, maxWidth: 40, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 120,
    name: 'Aeromexico', region: 'Latin America'
  },
  'Y4': { // Volaris
    maxLength: 55, maxWidth: 40, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 120,
    name: 'Volaris', region: 'Latin America'
  },
  '4O': { // Interjet
    maxLength: 55, maxWidth: 40, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 120,
    name: 'Interjet', region: 'Latin America'
  },
  'G3': { // GOL Linhas Aéreas
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 115,
    name: 'GOL Linhas Aéreas', region: 'Latin America'
  },
  'AD': { // Azul Brazilian Airlines
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Azul Brazilian Airlines', region: 'Latin America'
  },
  'JA': { // JetSMART
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 115,
    name: 'JetSMART', region: 'Latin America'
  },
  'H2': { // Sky Airline
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 115,
    name: 'Sky Airline', region: 'Latin America'
  },

  // Asian Airlines
  'SQ': { // Singapore Airlines
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Singapore Airlines', region: 'Asia'
  },
  'CX': { // Cathay Pacific
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Cathay Pacific', region: 'Asia'
  },
  'JL': { // Japan Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 120,
    name: 'Japan Airlines', region: 'Asia'
  },
  'NH': { // All Nippon Airways
    maxLength: 55, maxWidth: 40, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 120,
    name: 'All Nippon Airways', region: 'Asia'
  },
  'KE': { // Korean Air
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 12, maxTotalDimensions: 115,
    name: 'Korean Air', region: 'Asia'
  },
  'OZ': { // Asiana Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Asiana Airlines', region: 'Asia'
  },
  'CZ': { // China Southern Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 10, maxTotalDimensions: 115,
    name: 'China Southern Airlines', region: 'Asia'
  },
  'MU': { // China Eastern Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 10, maxTotalDimensions: 115,
    name: 'China Eastern Airlines', region: 'Asia'
  },
  'CA': { // Air China
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Air China', region: 'Asia'
  },
  'TG': { // Thai Airways
    maxLength: 56, maxWidth: 45, maxHeight: 25, maxWeight: 7, maxTotalDimensions: 126,
    name: 'Thai Airways', region: 'Asia'
  },
  'MH': { // Malaysia Airlines
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Malaysia Airlines', region: 'Asia'
  },
  'PR': { // Philippine Airlines
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Philippine Airlines', region: 'Asia'
  },
  '5J': { // Cebu Pacific
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Cebu Pacific', region: 'Asia'
  },
  '6E': { // IndiGo
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 7, maxTotalDimensions: 115,
    name: 'IndiGo', region: 'Asia'
  },
  'AI': { // Air India
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 115,
    name: 'Air India', region: 'Asia'
  },
  'SG': { // SpiceJet
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 7, maxTotalDimensions: 115,
    name: 'SpiceJet', region: 'Asia'
  },
  'VN': { // Vietnam Airlines
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Vietnam Airlines', region: 'Asia'
  },
  'GA': { // Garuda Indonesia
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Garuda Indonesia', region: 'Asia'
  },
  'JT': { // Lion Air
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Lion Air', region: 'Asia'
  },
  'AK': { // AirAsia
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'AirAsia', region: 'Asia'
  },

  // African Airlines
  'ET': { // Ethiopian Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 118,
    name: 'Ethiopian Airlines', region: 'Africa'
  },
  'SA': { // South African Airways
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 115,
    name: 'South African Airways', region: 'Africa'
  },
  'KQ': { // Kenya Airways
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 118,
    name: 'Kenya Airways', region: 'Africa'
  },
  'MS': { // EgyptAir
    maxLength: 50, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 113,
    name: 'EgyptAir', region: 'Africa'
  },
  'AT': { // Royal Air Maroc
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Royal Air Maroc', region: 'Africa'
  },
  'TU': { // Tunisair
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 115,
    name: 'Tunisair', region: 'Africa'
  },
  'AH': { // Air Algérie
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 115,
    name: 'Air Algérie', region: 'Africa'
  },
  'WB': { // Rwandair
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 118,
    name: 'Rwandair', region: 'Africa'
  },
  'FN': { // Fastjet
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Fastjet', region: 'Africa'
  },
  'MN': { // Kulula
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 115,
    name: 'Kulula', region: 'Africa'
  },

  // Oceania Airlines
  'QF': { // Qantas
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Qantas', region: 'Oceania'
  },
  'VA': { // Virgin Australia
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Virgin Australia', region: 'Oceania'
  },
  'JQ': { // Jetstar Airways
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Jetstar Airways', region: 'Oceania'
  },
  'NZ': { // Air New Zealand
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Air New Zealand', region: 'Oceania'
  },
  'FJ': { // Fiji Airways
    maxLength: 56, maxWidth: 36, maxHeight: 23, maxWeight: 7, maxTotalDimensions: 115,
    name: 'Fiji Airways', region: 'Oceania'
  },

  // Additional European Low-Cost Carriers
  'PC': { // Pegasus Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 8, maxTotalDimensions: 115,
    name: 'Pegasus Airlines', region: 'Europe'
  },
  'EW': { // Eurowings
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Eurowings', region: 'Europe'
  },
  'HV': { // Transavia
    maxLength: 55, maxWidth: 35, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Transavia', region: 'Europe'
  },
  'DE': { // Condor
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 8, maxTotalDimensions: 115,
    name: 'Condor', region: 'Europe'
  },
  'BY': { // TUI Airways
    maxLength: 56, maxWidth: 45, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 126,
    name: 'TUI Airways', region: 'Europe'
  },

  // Additional International Airlines
  'SU': { // Aeroflot
    maxLength: 55, maxWidth: 40, maxHeight: 20, maxWeight: 10, maxTotalDimensions: 115,
    name: 'Aeroflot', region: 'Europe'
  },
  'PS': { // Ukraine International Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Ukraine International Airlines', region: 'Europe'
  },
  'LO': { // LOT Polish Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'LOT Polish Airlines', region: 'Europe'
  },
  'OK': { // Czech Airlines
    maxLength: 55, maxWidth: 45, maxHeight: 25, maxWeight: 8, maxTotalDimensions: 125,
    name: 'Czech Airlines', region: 'Europe'
  },
  'JU': { // Air Serbia
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Air Serbia', region: 'Europe'
  },
  'OU': { // Croatia Airlines
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Croatia Airlines', region: 'Europe'
  },
  'RO': { // Tarom
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Tarom', region: 'Europe'
  },
  'FB': { // Bulgaria Air
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Bulgaria Air', region: 'Europe'
  },
  'BT': { // Air Baltic
    maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
    name: 'Air Baltic', region: 'Europe'
  },
  'FI': { // Icelandair
    maxLength: 56, maxWidth: 45, maxHeight: 25, maxWeight: 10, maxTotalDimensions: 126,
    name: 'Icelandair', region: 'Europe'
  }
}

// Default policy for airlines not in the database
export const defaultPolicy = {
  maxLength: 55, maxWidth: 40, maxHeight: 23, maxWeight: 8, maxTotalDimensions: 118,
  name: 'Standard Policy', region: 'International'
}

// Function to get airline policy by code
export const getAirlinePolicy = (airlineCode) => {
  return airlinePolicies[airlineCode] || defaultPolicy
}

// Function to get all airlines grouped by region
export const getAirlinesByRegion = () => {
  const regions = {}
  Object.entries(airlinePolicies).forEach(([code, policy]) => {
    if (!regions[policy.region]) {
      regions[policy.region] = []
    }
    regions[policy.region].push({ code, ...policy })
  })
  return regions
}