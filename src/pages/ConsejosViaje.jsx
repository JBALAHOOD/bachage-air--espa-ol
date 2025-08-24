
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import { motion } from "framer-motion";

export default function ConsejosViaje() {
  const consejos = [
    {
      categoria: "Preparación",
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
      categoria: "Seguridad",
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
      categoria: "Tiempo",
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
      categoria: "Optimización",
      icon: Zap,
      color: "bg-purple-500",
      tips: [
        "Usa organizadores de maleta para maximizar el espacio",
        "Enrolla la ropa en lugar de doblarla para ahorrar espacio",
        "Usa zapatos como espacio de almacenamiento para artículos pequeños",
        "Considera ropa de materiales ligeros para viajes largos"
      ]
    }
  ];

  const restriccionesComunies = [
    {
      item: "Líquidos",
      limite: "100ml por envase, máximo 1L total",
      categoria: "Equipaje de mano"
    },
    {
      item: "Dispositivos electrónicos grandes",
      limite: "Deben extraerse durante el control",
      categoria: "Equipaje de mano"
    },
    {
      item: "Baterías de litio",
      limite: "Solo en equipaje de mano",
      categoria: "Prohibido en facturado"
    },
    {
      item: "Objetos cortantes",
      limite: "Prohibidos",
      categoria: "Equipaje de mano"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Consejos para Viajar
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Guías prácticas y consejos expertos para que tu experiencia de viaje 
            sea perfecta desde el primer momento.
          </p>
        </motion.div>

        {/* Consejos por categorías */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {consejos.map((categoria, index) => (
            <motion.div
              key={categoria.categoria}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <div className={`w-10 h-10 ${categoria.color} rounded-xl flex items-center justify-center mr-4`}>
                      <categoria.icon className="w-5 h-5 text-white" />
                    </div>
                    {categoria.categoria}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categoria.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Restricciones comunes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <Card className="border-slate-200/50 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center text-2xl text-slate-800">
                <AlertTriangle className="w-7 h-7 text-amber-600 mr-4" />
                Restricciones Comunes de Seguridad
              </CardTitle>
              <p className="text-slate-600 mt-2">
                Elementos que debes tener en cuenta independientemente de la aerolínea
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {restriccionesComunies.map((restriccion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="p-4 border border-slate-200/50 rounded-xl bg-slate-50/50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-slate-800">{restriccion.item}</h4>
                      <Badge 
                        variant="outline"
                        className={`text-xs ${
                          restriccion.categoria.includes('mano') 
                            ? 'border-blue-300 text-blue-700 bg-blue-50'
                            : restriccion.categoria.includes('Prohibido')
                            ? 'border-red-300 text-red-700 bg-red-50'  
                            : 'border-amber-300 text-amber-700 bg-amber-50'
                        }`}
                      >
                        {restriccion.categoria}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{restriccion.limite}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Consejos adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Card className="border-slate-200/50 shadow-lg bg-gradient-to-br from-blue-50/50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-slate-800">
                <Plane className="w-6 h-6 text-blue-600 mr-3" />
                En el Aeropuerto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">Mantén la calma si tu equipaje excede los límites</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">Pregunta sobre opciones de redistribución de peso</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">Considera el upgrade de equipaje si está disponible</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200/50 shadow-lg bg-gradient-to-br from-emerald-50/50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-slate-800">
                <Luggage className="w-6 h-6 text-emerald-600 mr-3" />
                Compras Inteligentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">Invierte en una maleta ligera pero resistente</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">Considera básculas de viaje portátiles</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-700">Los organizadores de maleta valen la inversión</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
