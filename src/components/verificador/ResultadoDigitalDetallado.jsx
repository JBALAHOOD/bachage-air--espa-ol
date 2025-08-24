
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Download, 
  Share2,
  Ruler,
  Scale,
  Package,
  Clock,
  Plane,
  Shield,
  FileText,
  QrCode,
  Mail
} from "lucide-react";
import { motion } from "framer-motion";

export default function ResultadoDigitalDetallado({ 
  aerolinea, 
  dimensionesUsuario, 
  compatibilidad, 
  fechaVerificacion = new Date() 
}) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [compartiendoResultado, setCompartiendoResultado] = useState(false);

  const generarReporteID = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `VE-${timestamp}-${random}`.toUpperCase();
  };

  const [reporteID] = useState(generarReporteID());

  const calcularPorcentajeUso = () => {
    if (!aerolinea.equipaje_cabina_dimensiones || !dimensionesUsuario.largo) return null;
    
    const largo = parseFloat(dimensionesUsuario.largo);
    const ancho = parseFloat(dimensionesUsuario.ancho);
    const alto = parseFloat(dimensionesUsuario.alto);

    // Validar que sean números válidos
    if (isNaN(largo) || isNaN(ancho) || isNaN(alto)) return null;

    const [maxLargo, maxAncho, maxAlto] = aerolinea.equipaje_cabina_dimensiones
      .split('x').map(dim => parseInt(dim.trim()));
    
    const volumenMaximo = maxLargo * maxAncho * maxAlto;
    const volumenUsuario = largo * ancho * alto;
    
    return Math.min(100, Math.round((volumenUsuario / volumenMaximo) * 100));
  };

  const generarResumenTexto = () => {
    const estado = compatibilidad?.compatible ? "APROBADA" : "RECHAZADA";
    const fecha = fechaVerificacion.toLocaleDateString('es-ES');
    return `Verificación de Equipaje ${estado} - ${aerolinea.nombre} - ${fecha} - ID: ${reporteID}`;
  };

  const compartirResultado = async () => {
    setCompartiendoResultado(true);
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Verificación de Equipaje',
          text: generarResumenTexto(),
          url: window.location.href
        });
      } else {
        // Fallback: copiar al portapapeles
        await navigator.clipboard.writeText(generarResumenTexto());
        alert('Resultado copiado al portapapeles');
      }
    } catch (error) {
      console.error('Error compartiendo:', error);
    }
    setCompartiendoResultado(false);
  };

  const descargarReporte = () => {
    const reporte = {
      id: reporteID,
      fecha: fechaVerificacion.toISOString(),
      aerolinea: aerolinea.nombre,
      codigo_iata: aerolinea.codigo_iata,
      dimensiones_usuario: dimensionesUsuario,
      limites_aerolinea: {
        cabina_dimensiones: aerolinea.equipaje_cabina_dimensiones,
        cabina_peso: aerolinea.equipaje_cabina_peso,
        facturado_dimensiones: aerolinea.equipaje_facturado_dimensiones,
        facturado_peso: aerolinea.equipaje_facturado_peso
      },
      resultado: compatibilidad?.compatible ? "APROBADO" : "RECHAZADO",
      detalles_compatibilidad: compatibilidad?.detalles,
      porcentaje_uso: calcularPorcentajeUso()
    };

    const blob = new Blob([JSON.stringify(reporte, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `verificacion-equipaje-${reporteID}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const porcentajeUso = calcularPorcentajeUso();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header del Resultado Digital */}
      <Card className="border-slate-200/50 shadow-xl bg-gradient-to-r from-white to-slate-50/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                compatibilidad?.compatible 
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600" 
                  : "bg-gradient-to-r from-red-500 to-red-600"
              }`}>
                {compatibilidad?.compatible ? (
                  <CheckCircle2 className="w-6 h-6 text-white" />
                ) : (
                  <XCircle className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <CardTitle className="text-2xl">
                  {compatibilidad?.compatible ? "Equipaje Aprobado" : "Equipaje No Cumple"}
                </CardTitle>
                <p className="text-slate-600 mt-1">
                  Verificación digital completa • ID: {reporteID}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge 
                className={`px-3 py-1 ${
                  compatibilidad?.compatible
                    ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                    : "bg-red-100 text-red-800 border-red-300"
                }`}
              >
                {compatibilidad?.compatible ? "✓ VÁLIDO" : "✗ REQUIERE AJUSTES"}
              </Badge>
              <div className="text-right text-sm text-slate-500">
                <p>{fechaVerificacion.toLocaleDateString('es-ES')}</p>
                <p>{fechaVerificacion.toLocaleTimeString('es-ES', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          {/* Barra de progreso de uso del espacio */}
          {porcentajeUso !== null && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">
                  Uso del Espacio Permitido
                </span>
                <span className={`text-sm font-bold ${
                  porcentajeUso > 100 ? "text-red-600" : 
                  porcentajeUso > 90 ? "text-amber-600" : "text-emerald-600"
                }`}>
                  {porcentajeUso}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${
                    porcentajeUso > 100 ? "bg-gradient-to-r from-red-500 to-red-600" :
                    porcentajeUso > 90 ? "bg-gradient-to-r from-amber-500 to-amber-600" :
                    "bg-gradient-to-r from-emerald-500 to-emerald-600"
                  }`}
                  style={{ width: `${Math.min(porcentajeUso, 100)}%` }}
                ></div>
              </div>
              {porcentajeUso > 100 && (
                <p className="text-xs text-red-600 mt-1">
                  ⚠️ Excede el límite permitido por {porcentajeUso - 100}%
                </p>
              )}
            </div>
          )}

          {/* Acciones rápidas */}
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              onClick={() => setMostrarDetalles(!mostrarDetalles)}
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {mostrarDetalles ? "Ocultar" : "Ver"} Detalles Técnicos
            </Button>
            
            <Button 
              variant="outline" 
              onClick={compartirResultado}
              disabled={compartiendoResultado}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Compartir Resultado
            </Button>
            
            <Button 
              variant="outline"
              onClick={descargarReporte}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Descargar Reporte
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Detalles Técnicos Expandibles */}
      {mostrarDetalles && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <Card className="border-slate-200/50 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <QrCode className="w-5 h-5 mr-3" />
                Análisis Dimensional Detallado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Comparación Dimensional */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Largo", usuario: dimensionesUsuario.largo, limite: aerolinea.equipaje_cabina_dimensiones?.split('x')[0]?.trim() },
                  { label: "Ancho", usuario: dimensionesUsuario.ancho, limite: aerolinea.equipaje_cabina_dimensiones?.split('x')[1]?.trim() },
                  { label: "Alto", usuario: dimensionesUsuario.alto, limite: aerolinea.equipaje_cabina_dimensiones?.split('x')[2]?.trim() }
                ].map((dimension, index) => {
                  const valorUsuario = parseFloat(dimension.usuario || 0);
                  const valorLimite = parseFloat(dimension.limite || 0);
                  const cumple = !isNaN(valorUsuario) && !isNaN(valorLimite) && valorUsuario <= valorLimite;
                  const porcentaje = valorLimite ? Math.round((valorUsuario / valorLimite) * 100) : 0;
                  
                  return (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                        cumple ? "bg-emerald-100" : "bg-red-100"
                      }`}>
                        <Ruler className={`w-6 h-6 ${cumple ? "text-emerald-600" : "text-red-600"}`} />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-1">{dimension.label}</h4>
                      <p className="text-2xl font-bold mb-1">
                        <span className={cumple ? "text-emerald-600" : "text-red-600"}>
                          {valorUsuario || 0}
                        </span>
                        <span className="text-slate-400 text-lg">/{dimension.limite} cm</span>
                      </p>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        cumple ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                      }`}>
                        {porcentaje}% usado
                      </div>
                    </div>
                  );
                })}
              </div>

              <Separator />

              {/* Información del Peso */}
              {dimensionesUsuario.peso && aerolinea.equipaje_cabina_peso && !isNaN(parseFloat(dimensionesUsuario.peso)) && (
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Scale className="w-6 h-6 text-slate-600" />
                      <div>
                        <h4 className="font-semibold text-slate-800">Control de Peso</h4>
                        <p className="text-slate-600 text-sm">Verificación del límite de peso</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        <span className={parseFloat(dimensionesUsuario.peso) <= aerolinea.equipaje_cabina_peso ? "text-emerald-600" : "text-red-600"}>
                          {parseFloat(dimensionesUsuario.peso).toFixed(1)} kg
                        </span>
                      </p>
                      <p className="text-slate-500 text-sm">
                        Límite: {aerolinea.equipaje_cabina_peso} kg
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          parseFloat(dimensionesUsuario.peso) > aerolinea.equipaje_cabina_peso
                            ? "bg-gradient-to-r from-red-500 to-red-600"
                            : "bg-gradient-to-r from-emerald-500 to-emerald-600"
                        }`}
                        style={{ 
                          width: `${Math.min(100, (parseFloat(dimensionesUsuario.peso) / aerolinea.equipaje_cabina_peso) * 100)}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Resumen de Cumplimiento */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {compatibilidad?.detalles && Object.entries(compatibilidad.detalles).map(([key, cumple], index) => {
                  const labels = {
                    largoOk: "Largo",
                    anchoOk: "Ancho",
                    altoOk: "Alto", 
                    pesoOk: "Peso"
                  };
                  
                  return (
                    <div key={index} className={`p-4 rounded-xl border-2 text-center ${
                      cumple 
                        ? "bg-emerald-50 border-emerald-200"
                        : "bg-red-50 border-red-200"
                    }`}>
                      <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                        cumple ? "bg-emerald-500" : "bg-red-500"
                      }`}>
                        {cumple ? (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        ) : (
                          <XCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <h5 className={`font-medium ${cumple ? "text-emerald-800" : "text-red-800"}`}>
                        {labels[key]}
                      </h5>
                      <p className={`text-xs mt-1 ${cumple ? "text-emerald-600" : "text-red-600"}`}>
                        {cumple ? "Cumple" : "Excede"}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Timestamp y Validez */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-800 mb-1">Validez del Resultado</h5>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      Esta verificación fue realizada el {fechaVerificacion.toLocaleString('es-ES')} 
                      y es válida para la aerolínea {aerolinea.nombre} según las políticas vigentes. 
                      Las políticas pueden cambiar sin previo aviso.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Recomendaciones Personalizadas */}
      {!compatibilidad?.compatible && (
        <Card className="border-amber-200 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-amber-800">
              <AlertTriangle className="w-6 h-6 mr-3" />
              Recomendaciones para Aprobar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {compatibilidad?.detalles && Object.entries(compatibilidad.detalles).map(([key, cumple], index) => {
                if (cumple) return null;
                
                const recomendaciones = {
                  largoOk: "Reduce el largo de tu maleta o considera redistribuir el contenido",
                  anchoOk: "El ancho excede el límite, prueba con una maleta más estrecha",
                  altoOk: "La altura es excesiva, comprímela o cambia de maleta",
                  pesoOk: "Elimina artículos innecesarios o redistribuye peso a equipaje facturado"
                };
                
                return (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/80 rounded-lg">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-amber-800 font-medium">
                      {recomendaciones[key]}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
