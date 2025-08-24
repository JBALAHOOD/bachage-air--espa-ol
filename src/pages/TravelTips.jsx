import React from 'react'
import { 
  Lightbulb, 
  Shield, 
  Clock, 
  Scale, 
  Zap, 
  CheckCircle2,
  AlertTriangle,
  Plane,
  Luggage
} from 'lucide-react'

const TravelTips = () => {
  const tipCategories = [
    {
      title: "Preparación",
      icon: Lightbulb,
      color: "bg-yellow-500",
      tips: [
        "Pesa tu maleta antes de salir de casa con una báscula",
        "Lleva una cinta métrica para medir dimensiones si es necesario",
        "Deja espacio extra en tu maleta para compras en el destino",
        "Considera llevar una maleta plegable extra para el regreso"
      ]
    },
    {
      title: "Seguridad",
      icon: Shield,
      color: "bg-green-500", 
      tips: [
        "Nunca pongas objetos valiosos en equipaje facturado",
        "Mantén medicamentos y documentos siempre en equipaje de mano",
        "Usa candados homologados TSA para tu maleta facturada",
        "Toma fotos de tu equipaje antes del viaje"
      ]
    },
    {
      title: "Tiempo",
      icon: Clock,
      color: "bg-blue-500",
      tips: [
        "Llega al aeropuerto con tiempo extra si tu maleta está en el límite",
        "Los mostradores de facturación suelen ser más estrictos en hora punta",
        "Considera el check-in online para evitar colas",
        "Ten en cuenta tiempo extra para redistribuir equipaje si es necesario"
      ]
    },
    {
      title: "Peso y Dimensiones",
      icon: Scale,
      color: "bg-purple-500",
      tips: [
        "Distribuye el peso entre equipaje de mano y facturado",
        "Las ruedas y asas cuentan en las dimensiones totales",
        "Algunos aeropuertos tienen básculas públicas gratuitas",
        "Considera maletas expandibles para mayor flexibilidad"
      ]
    },
    {
      title: "Consejos Rápidos",
      icon: Zap,
      color: "bg-orange-500",
      tips: [
        "Lleva ropa pesada puesta en lugar de en la maleta",
        "Usa bolsillos de chaquetas para objetos pequeños y pesados",
        "Las aerolíneas low-cost suelen ser más estrictas",
        "Revisa las políticas específicas de tu aerolínea antes del viaje"
      ]
    }
  ]

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Consejos de Viaje
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tips esenciales para viajar sin problemas con tu equipaje
          </p>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tipCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="glass-effect rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-500 mr-4" />
            <h2 className="text-2xl font-bold text-slate-900">Importante Recordar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Plane className="w-6 h-6 text-blue-500 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Políticas por Aerolínea</h4>
                <p className="text-slate-600">Cada aerolínea tiene sus propias reglas. Siempre verifica las políticas específicas antes de viajar.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Luggage className="w-6 h-6 text-purple-500 mr-3 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Equipaje de Mano vs Facturado</h4>
                <p className="text-slate-600">Las restricciones son diferentes para equipaje de mano y facturado. Planifica en consecuencia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelTips