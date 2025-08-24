import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import AirlineSearch from '../components/AirlineSearch'
import DimensionCalculator from '../components/DimensionCalculator'
import VerificationResult from '../components/VerificationResult'
import { getAirlinePolicy } from '../data/airlinePolicies'

const BaggageChecker = () => {
  const [selectedAirline, setSelectedAirline] = useState(null)
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: '',
    weight: ''
  })
  const [verificationResult, setVerificationResult] = useState(null)

  const handleAirlineSelect = (airline) => {
    setSelectedAirline(airline)
    setVerificationResult(null) // Reset result when airline changes
  }

  const handleDimensionChange = (field, value) => {
    setDimensions(prev => ({
      ...prev,
      [field]: value
    }))
    setVerificationResult(null) // Reset result when dimensions change
  }

  const handleVerification = () => {
    if (!selectedAirline || !dimensions.length || !dimensions.width || !dimensions.height) {
      return
    }

    const totalDimensions = parseInt(dimensions.length) + parseInt(dimensions.width) + parseInt(dimensions.height)
    const weight = parseFloat(dimensions.weight) || 0
    
    // Get real airline policy from database
    const airlinePolicy = getAirlinePolicy(selectedAirline.code)

    const result = {
      airline: selectedAirline,
      dimensions: dimensions,
      limits: airlinePolicy,
      compliant: {
        length: parseInt(dimensions.length) <= airlinePolicy.maxLength,
        width: parseInt(dimensions.width) <= airlinePolicy.maxWidth,
        height: parseInt(dimensions.height) <= airlinePolicy.maxHeight,
        weight: weight <= airlinePolicy.maxWeight,
        totalDimensions: totalDimensions <= airlinePolicy.maxTotalDimensions
      },
      totalDimensions: totalDimensions
    }

    result.overallCompliant = Object.values(result.compliant).every(Boolean)
    setVerificationResult(result)
  }

  return (
    <div className="space-y-12">
      <HeroSection />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AirlineSearch 
          selectedAirline={selectedAirline}
          onAirlineSelect={handleAirlineSelect}
        />
        
        {selectedAirline && (
          <DimensionCalculator 
            dimensions={dimensions}
            onDimensionChange={handleDimensionChange}
            onVerify={handleVerification}
          />
        )}
        
        {verificationResult && (
          <VerificationResult result={verificationResult} />
        )}
      </div>
    </div>
  )
}

export default BaggageChecker