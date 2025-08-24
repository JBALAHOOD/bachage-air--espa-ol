import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plane, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BuscadorAerolinea({ 
  busqueda, 
  setBusqueda, 
  aerolineasFiltradas, 
  onSeleccionAerolinea, 
  isLoading 
}) {
  return (
    <div className="relative">
      <Card className="border-slate-200/50 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Busca tu Aerolínea
            </h2>
            <p className="text-slate-600">
              Escribe el nombre de la aerolínea o su código IATA
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <Input
              type="text"
              placeholder="Ej: Iberia, Ryanair, AA..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="pl-11 h-14 text-lg border-slate-200/50 focus:border-blue-400 focus:ring-blue-400/20 bg-white/50"
            />
            {isLoading && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
              </div>
            )}
          </div>

          {/* Sugerencias de búsqueda */}
          <AnimatePresence>
            {busqueda && aerolineasFiltradas.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 z-50"
              >
                <Card className="border-slate-200/50 shadow-xl bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-2">
                    {aerolineasFiltradas.map((aerolinea, index) => (
                      <motion.button
                        key={aerolinea.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => onSeleccionAerolinea(aerolinea)}
                        className="w-full flex items-center space-x-4 p-4 hover:bg-slate-50 rounded-xl transition-colors text-left group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Plane className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
                            {aerolinea.nombre}
                          </h4>
                          <p className="text-sm text-slate-500">{aerolinea.codigo_iata}</p>
                        </div>
                      </motion.button>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {busqueda && aerolineasFiltradas.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4 text-slate-500"
            >
              No se encontraron aerolíneas. Intenta con otro nombre.
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}