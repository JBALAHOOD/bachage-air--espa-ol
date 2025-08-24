import React, { useState, useMemo } from 'react'
import { Search, Plane, Check, Globe } from 'lucide-react'
import { getAirlinesByRegion } from '../data/airlinePolicies'

const AirlineSearch = ({ selectedAirline, onAirlineSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  // Get airlines from database grouped by region
  const airlinesByRegion = useMemo(() => getAirlinesByRegion(), [])
  
  // Flatten all airlines for search
  const airlines = useMemo(() => {
    const allAirlines = []
    Object.entries(airlinesByRegion).forEach(([region, regionAirlines]) => {
      regionAirlines.forEach((airline, index) => {
        allAirlines.push({
          id: allAirlines.length + 1,
          name: airline.name,
          code: airline.code,
          region: airline.region
        })
      })
    })
    return allAirlines
  }, [airlinesByRegion])
  
  // Popular airlines for quick selection
  const popularAirlines = [
    { id: 1, name: 'Iberia', code: 'IB', region: 'Europe' },
    { id: 2, name: 'Ryanair', code: 'FR', region: 'Europe' },
    { id: 3, name: 'Emirates', code: 'EK', region: 'Middle East' },
    { id: 4, name: 'Qatar Airways', code: 'QR', region: 'Middle East' },
    { id: 5, name: 'American Airlines', code: 'AA', region: 'North America' },
    { id: 6, name: 'Delta Air Lines', code: 'DL', region: 'North America' },
    { id: 7, name: 'Lufthansa', code: 'LH', region: 'Europe' },
    { id: 8, name: 'Air France', code: 'AF', region: 'Europe' },
    { id: 9, name: 'British Airways', code: 'BA', region: 'Europe' },
    { id: 10, name: 'Turkish Airlines', code: 'TK', region: 'Europe' },
    { id: 11, name: 'Singapore Airlines', code: 'SQ', region: 'Asia' },
    { id: 12, name: 'Cathay Pacific', code: 'CX', region: 'Asia' }
  ]

  const filteredAirlines = useMemo(() => {
    if (!searchTerm) return airlines.slice(0, 20) // Show first 20 if no search
    return airlines.filter(airline => 
      airline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airline.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airline.region.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 50) // Limit to 50 results
  }, [searchTerm, airlines])

  const handleAirlineSelect = (airline) => {
    onAirlineSelect(airline)
    setSearchTerm('')
    setIsOpen(false)
  }

  return (
    <div id="airline-search" className="w-full max-w-2xl mx-auto">
      <div className="glass-effect rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Busca tu Aerolínea
          </h2>
          <p className="text-slate-600">
            Escribe el nombre de la aerolínea, código IATA o región (100 aerolíneas disponibles)
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Ej: Iberia, Ryanair, AA..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setIsOpen(true)
            }}
            onFocus={() => setIsOpen(true)}
            className="w-full pl-11 pr-4 py-4 text-lg border border-slate-200 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 bg-white/50 transition-all duration-200"
          />
        </div>

        {/* Selected Airline Display */}
        {selectedAirline && !isOpen && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{selectedAirline.name}</h3>
                  <p className="text-sm text-slate-600">{selectedAirline.code} • {selectedAirline.region}</p>
                </div>
              </div>
              <Check className="w-6 h-6 text-green-500" />
            </div>
          </div>
        )}

        {/* Search Results */}
        {isOpen && searchTerm && (
          <div className="mt-4 max-h-64 overflow-y-auto border border-slate-200 rounded-xl bg-white shadow-lg">
            {filteredAirlines.length > 0 ? (
              filteredAirlines.map((airline) => (
                <button
                  key={airline.id}
                  onClick={() => handleAirlineSelect(airline)}
                  className="w-full p-4 text-left hover:bg-blue-50 transition-colors duration-150 border-b border-slate-100 last:border-b-0 flex items-center"
                >
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-3">
                    <Plane className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{airline.name}</div>
                    <div className="text-sm text-slate-500">{airline.code} • {airline.region}</div>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-slate-500">
                No se encontraron aerolíneas que coincidan con tu búsqueda
              </div>
            )}
          </div>
        )}

        {/* Popular Airlines */}
        {!searchTerm && !selectedAirline && (
          <div className="mt-8">
            <h3 className="text-sm font-medium text-slate-700 mb-4">Aerolíneas populares:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {popularAirlines.slice(0, 6).map((airline) => (
                <button
                  key={airline.id}
                  onClick={() => handleAirlineSelect(airline)}
                  className="p-3 text-left bg-white/50 hover:bg-blue-50 border border-slate-200 rounded-lg transition-all duration-200 hover:border-blue-300"
                >
                  <div className="font-medium text-slate-900 text-sm">{airline.name}</div>
                  <div className="text-xs text-slate-500">{airline.code} • {airline.region}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AirlineSearch