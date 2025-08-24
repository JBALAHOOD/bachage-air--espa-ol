import React from 'react'
import { CheckCircle2, XCircle, AlertTriangle, Plane, Scale, Ruler } from 'lucide-react'

const VerificationResult = ({ result }) => {
  const { airline, dimensions, limits, compliant, overallCompliant, totalDimensions } = result
  const airlineRegion = limits.region || 'Internacional'

  const getStatusIcon = (isCompliant) => {
    return isCompliant ? (
      <CheckCircle2 className="w-5 h-5 text-green-500" />
    ) : (
      <XCircle className="w-5 h-5 text-red-500" />
    )
  }

  const getStatusColor = (isCompliant) => {
    return isCompliant ? 'text-green-700 bg-green-50 border-green-200' : 'text-red-700 bg-red-50 border-red-200'
  }

  const dimensionChecks = [
    {
      label: 'Largo',
      value: dimensions.length,
      limit: limits.maxLength,
      unit: 'cm',
      compliant: compliant.length
    },
    {
      label: 'Ancho',
      value: dimensions.width,
      limit: limits.maxWidth,
      unit: 'cm',
      compliant: compliant.width
    },
    {
      label: 'Alto',
      value: dimensions.height,
      limit: limits.maxHeight,
      unit: 'cm',
      compliant: compliant.height
    },
    {
      label: 'Dimensiones Totales',
      value: totalDimensions,
      limit: limits.maxTotalDimensions,
      unit: 'cm',
      compliant: compliant.totalDimensions
    }
  ]

  if (dimensions.weight) {
    dimensionChecks.push({
      label: 'Peso',
      value: dimensions.weight,
      limit: limits.maxWeight,
      unit: 'kg',
      compliant: compliant.weight
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-effect rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
              <Plane className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Resultado de Verificación</h2>
              <p className="text-slate-600">{airline.name} ({airline.code})</p>
              <p className="text-sm text-slate-500">Región: {airlineRegion}</p>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-xl border font-semibold ${
            overallCompliant ? 'text-green-700 bg-green-50 border-green-200' : 'text-red-700 bg-red-50 border-red-200'
          }`}>
            {overallCompliant ? '✅ Cumple' : '❌ No Cumple'}
          </div>
        </div>

        {/* Overall Status */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${
          overallCompliant 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-start">
            {overallCompliant ? (
              <CheckCircle2 className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
            ) : (
              <AlertTriangle className="w-8 h-8 text-red-500 mr-4 mt-1 flex-shrink-0" />
            )}
            <div>
              <h3 className={`text-xl font-bold mb-2 ${
                overallCompliant ? 'text-green-800' : 'text-red-800'
              }`}>
                {overallCompliant 
                  ? '¡Perfecto! Tu equipaje cumple con las políticas' 
                  : 'Tu equipaje excede los límites permitidos'
                }
              </h3>
              <p className={`${
                overallCompliant ? 'text-green-700' : 'text-red-700'
              }`}>
                {overallCompliant 
                  ? 'Puedes viajar sin problemas con este equipaje de mano.'
                  : 'Necesitas ajustar las dimensiones o considerar facturar tu equipaje.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Airline Policy Info */}
        <div className="p-4 bg-slate-50 rounded-xl mb-6">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">Política de {airline.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div>
              <span className="text-slate-500">Largo máx:</span>
              <div className="font-semibold">{limits.maxLength} cm</div>
            </div>
            <div>
              <span className="text-slate-500">Ancho máx:</span>
              <div className="font-semibold">{limits.maxWidth} cm</div>
            </div>
            <div>
              <span className="text-slate-500">Alto máx:</span>
              <div className="font-semibold">{limits.maxHeight} cm</div>
            </div>
            <div>
              <span className="text-slate-500">Dimensiones totales:</span>
              <div className="font-semibold">{limits.maxTotalDimensions} cm</div>
            </div>
            <div>
              <span className="text-slate-500">Peso máx:</span>
              <div className="font-semibold">{limits.maxWeight} kg</div>
            </div>
          </div>
        </div>

        {/* Detailed Checks */}
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Verificación Detallada</h3>
          
          {dimensionChecks.map((check, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
              <div className="flex items-center">
                {getStatusIcon(check.compliant)}
                <span className="ml-3 font-medium text-slate-700">{check.label}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className={`font-semibold ${
                    check.compliant ? 'text-slate-900' : 'text-red-600'
                  }`}>
                    {check.value} {check.unit}
                  </div>
                  <div className="text-sm text-slate-500">
                    Límite: {check.limit} {check.unit}
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  check.compliant 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {check.compliant ? 'OK' : 'Excede'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        {!overallCompliant && (
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Recomendaciones</h4>
                <ul className="space-y-2 text-amber-700">
                  {!compliant.length && (
                    <li>• Reduce el largo de tu maleta a máximo {limits.maxLength} cm</li>
                  )}
                  {!compliant.width && (
                    <li>• Reduce el ancho de tu maleta a máximo {limits.maxWidth} cm</li>
                  )}
                  {!compliant.height && (
                    <li>• Reduce el alto de tu maleta a máximo {limits.maxHeight} cm</li>
                  )}
                  {!compliant.totalDimensions && (
                    <li>• Las dimensiones totales no pueden superar {limits.maxTotalDimensions} cm</li>
                  )}
                  {dimensions.weight && !compliant.weight && (
                    <li>• Reduce el peso a máximo {limits.maxWeight} kg</li>
                  )}
                  <li>• Considera facturar tu equipaje si no puedes reducir las dimensiones</li>
                  <li>• Contacta con la aerolínea para confirmar políticas específicas</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button 
            onClick={() => window.location.reload()}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Verificar Otra Maleta
          </button>
          <button 
            onClick={() => window.location.href = '/travel-tips'}
            className="flex-1 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors duration-200"
          >
            Ver Consejos de Viaje
          </button>
        </div>
      </div>
    </div>
  )
}

export default VerificationResult