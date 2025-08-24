import React from "react";
import { motion } from "framer-motion";
import { Plane, Shield, Clock, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <Plane className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                Verificador de
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Equipaje
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Evita sorpresas en el aeropuerto. Verifica si tu maleta cumple con las políticas 
              de equipaje de tu aerolínea antes de viajar.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10"
            >
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <span className="text-sm font-medium text-slate-700 mr-3">¿Listo para viajar?</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Características destacadas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Verificación Instantánea</h3>
              <p className="text-sm text-slate-600 text-center">
                Resultados inmediatos para que planifiques tu viaje sin demoras.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Información Actualizada</h3>
              <p className="text-sm text-slate-600 text-center">
                Políticas de equipaje siempre actualizadas de las principales aerolíneas.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Cobertura Mundial</h3>
              <p className="text-sm text-slate-600 text-center">
                Base de datos completa con aerolíneas de todo el mundo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}