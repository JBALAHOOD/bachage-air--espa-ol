import React, { useState, useEffect, useMemo } from "react";
import { Aerolinea } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plane, 
  Star,
  ArrowRight,
  TrendingUp,
  Users,
  Shield
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "../components/verificador/HeroSection";
import BuscadorAerolinea from "../components/verificador/BuscadorAerolinea";
import CalculadoraDimensiones from "../components/verificador/CalculadoraDimensiones";
import ResultadoDigitalDetallado from "../components/verificador/ResultadoDigitalDetallado";

export default function VerificadorEquipaje() {
  const [aerolineas, setAerolineas] = useState([]);
  const [aerolineaSeleccionada, setAerolineaSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dimensionesUsuario, setDimensionesUsuario] = useState({
    largo: "",
    ancho: "",
    alto: "",
    peso: ""
  });
  const [resultadoVerificacion, setResultadoVerificacion] = useState(null);

  useEffect(() => {
    cargarAerolineas();
  }, []);

  // Limpiar resultado si cambian las dimensiones
  useEffect(() => {
    setResultadoVerificacion(null);
  }, [dimensionesUsuario]);


  const cargarAerolineas = async () => {
    try {
      const data = await Aerolinea.list();
      setAerolineas(data);
    } catch (error) {
      console.error("Error cargando aerolíneas:", error);
    }
  };

  const aerolineasFiltradas = useMemo(() => {
    if (!busqueda) return [];
    return aerolineas.filter(aerolinea =>
      aerolinea.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      aerolinea.codigo_iata.toLowerCase().includes(busqueda.toLowerCase())
    ).slice(0, 5);
  }, [aerolineas, busqueda]);

  const manejarSeleccionAerolinea = async (aerolinea) => {
    setIsLoading(true);
    setAerolineaSeleccionada(aerolinea);
    setBusqueda(aerolinea.nombre);
    setResultadoVerificacion(null); // Limpiar resultado anterior
    
    // Simular pequeña carga para mejor UX
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const verificarCompatibilidad = () => {
    if (!aerolineaSeleccionada || !dimensionesUsuario.largo || !dimensionesUsuario.ancho || !dimensionesUsuario.alto) {
      return null;
    }

    const largo = parseFloat(dimensionesUsuario.largo);
    const ancho = parseFloat(dimensionesUsuario.ancho);
    const alto = parseFloat(dimensionesUsuario.alto);
    const peso = dimensionesUsuario.peso ? parseFloat(dimensionesUsuario.peso) : null;

    if (isNaN(largo) || isNaN(ancho) || isNaN(alto) || largo <= 0 || ancho <= 0 || alto <= 0) {
      return null;
    }

    const [maxLargo, maxAncho, maxAlto] = aerolineaSeleccionada.equipaje_cabina_dimensiones
      .split('x').map(dim => parseInt(dim.trim()));
    
    const largoOk = largo <= maxLargo;
    const anchoOk = ancho <= maxAncho;
    const altoOk = alto <= maxAlto;
    const pesoOk = !peso || !aerolineaSeleccionada.equipaje_cabina_peso || 
                   peso <= aerolineaSeleccionada.equipaje_cabina_peso;

    return {
      compatible: largoOk && anchoOk && altoOk && pesoOk,
      detalles: { largoOk, anchoOk, altoOk, pesoOk }
    };
  };

  const handleVerificar = () => {
    const resultado = verificarCompatibilidad();
    setResultadoVerificacion(resultado);
  };

  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Sección Principal */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Estadísticas rápidas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Plane className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-slate-800">{aerolineas.length}+</span>
                </div>
                <p className="text-sm text-slate-600">Aerolíneas en nuestra base de datos</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-2xl font-bold text-slate-800">10K+</span>
                </div>
                <p className="text-sm text-slate-600">Verificaciones realizadas</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-2xl font-bold text-slate-800">98%</span>
                </div>
                <p className="text-sm text-slate-600">Precisión en resultados</p>
              </div>
            </motion.div>

            {/* Buscador */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <BuscadorAerolinea
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                aerolineasFiltradas={aerolineasFiltradas}
                onSeleccionAerolinea={manejarSeleccionAerolinea}
                isLoading={isLoading}
              />
            </motion.div>

            {/* Calculadora de Dimensiones */}
            {aerolineaSeleccionada && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <CalculadoraDimensiones
                  dimensiones={dimensionesUsuario}
                  setDimensiones={setDimensionesUsuario}
                  onVerificar={handleVerificar}
                />
              </motion.div>
            )}

            {/* Resultado Digital Detallado */}
            <AnimatePresence>
              {resultadoVerificacion && aerolineaSeleccionada && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="mt-8"
                >
                  <ResultadoDigitalDetallado
                    aerolinea={aerolineaSeleccionada}
                    dimensionesUsuario={dimensionesUsuario}
                    compatibilidad={resultadoVerificacion}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Aerolíneas Populares */}
            {!aerolineaSeleccionada && aerolineas.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Aerolíneas Más Consultadas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {aerolineas.slice(0, 6).map((aerolinea, index) => (
                    <motion.div
                      key={aerolinea.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Card 
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 border-slate-200/50 hover:border-blue-300/50 group"
                        onClick={() => manejarSeleccionAerolinea(aerolinea)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <Plane className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
                                  {aerolinea.nombre}
                                </h4>
                                <p className="text-sm text-slate-500">{aerolinea.codigo_iata}</p>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FAQ Section para SEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <Card className="border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Preguntas Frecuentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      ¿Cómo mido correctamente mi maleta?
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Mide tu maleta incluyendo ruedas, asas y cualquier parte sobresaliente. 
                      Las dimensiones se toman en el punto más ancho, alto y profundo de la maleta.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      ¿Las políticas de equipaje cambian frecuentemente?
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Sí, las aerolíneas pueden modificar sus políticas. Por eso actualizamos 
                      regularmente nuestra base de datos y recomendamos verificar directamente 
                      con la aerolínea antes del viaje.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      ¿Qué pasa si mi maleta excede los límites por poco?
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Los controles pueden variar entre aeropuertos y personal. Si excedes por poco, 
                      considera redistribuir el contenido entre equipaje de mano y facturado, 
                      o llevar una bolsa adicional si está permitida.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
  );
}