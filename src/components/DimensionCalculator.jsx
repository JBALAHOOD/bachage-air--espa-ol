import React from 'react'
import { Ruler, AlertCircle, Calculator } from 'lucide-react'

const DimensionCalculator = ({ dimensions, onDimensionChange, onVerify }) => {
  const handleInputChange = (field, value) => {
    // Only allow positive numbers
    if (value === '' || (Number(value) >= 0 && !isNaN(Number(value)))) {
      onDimensionChange(field, value)
    }
  }

  const isValidInput = (value) => {
    return value !== '' && !isNaN(Number(value)) && Number(value) > 0
  }

  const canVerify = () => {
    return dimensions.length && dimensions.width && dimensions.height &&
           isValidInput(dimensions.length) && 
           isValidInput(dimensions.width) && 
           isValidInput(dimensions.height)
  }

  const totalDimensions = () => {
    const length = parseFloat(dimensions.length) || 0
    const width = parseFloat(dimensions.width) || 0
    const height = parseFloat(dimensions.height) || 0
    return length + width + height
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-effect rounded-2xl p-8 shadow-xl">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
            <Ruler className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Introduce las Dimensiones</h2>
            <p className="text-slate-600">Ingresa las medidas exactas de tu equipaje de mano en centímetros</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Length */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Largo (cm) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="0.1"
                value={dimensions.length}
                onChange={(e) => handleInputChange('length', e.target.value)}
                placeholder="55"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-200"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-slate-400 text-sm">cm</span>
              </div>
            </div>
          </div>

          {/* Width */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Ancho (cm) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="0.1"
                value={dimensions.width}
                onChange={(e) => handleInputChange('width', e.target.value)}
                placeholder="40"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-200"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-slate-400 text-sm">cm</span>
              </div>
            </div>
          </div>

          {/* Height */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Alto (cm) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="0.1"
                value={dimensions.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                placeholder="20"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-200"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-slate-400 text-sm">cm</span>
              </div>
            </div>
          </div>

          {/* Weight */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Peso (kg)
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                step="0.1"
                value={dimensions.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                placeholder="8"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-200"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-slate-400 text-sm">kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dimension Summary */}
        {canVerify() && (
          <div className="mb-6 p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calculator className="w-5 h-5 text-slate-600 mr-2" />
                <span className="text-sm font-medium text-slate-700">Dimensiones totales:</span>
              </div>
              <span className="text-lg font-bold text-slate-900">
                {totalDimensions().toFixed(1)} cm
              </span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {dimensions.length} + {dimensions.width} + {dimensions.height} = {totalDimensions().toFixed(1)} cm
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Consejos para medir correctamente:</p>
              <ul className="space-y-1 text-blue-700">
                <li>• Incluye las ruedas y asas en las medidas</li>
                <li>• Mide la maleta completamente cerrada</li>
                <li>• Usa una cinta métrica para mayor precisión</li>
                <li>• Las dimensiones se suman para obtener el total</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Verify Button */}
        <div className="text-center">
          <button
            onClick={onVerify}
            disabled={!canVerify()}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
              canVerify()
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {canVerify() ? 'Verificar Equipaje' : 'Completa las dimensiones requeridas'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DimensionCalculator