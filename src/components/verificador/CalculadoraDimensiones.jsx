import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Ruler, AlertCircle, Search } from "lucide-react";

export default function CalculadoraDimensiones({ dimensiones, setDimensiones, onVerificar }) {
  const handleInputChange = (campo, valor) => {
    // Validar que solo sean números positivos
    if (valor === '' || (Number(valor) >= 0 && !isNaN(Number(valor)))) {
      setDimensiones(prev => ({
        ...prev,
        [campo]: valor
      }));
    }
  };

  const validarEntrada = (valor) => {
    return valor !== '' && !isNaN(Number(valor)) && Number(valor) > 0;
  };

  const sePuedeVerificar = () => {
    return dimensiones.largo && dimensiones.ancho && dimensiones.alto &&
           validarEntrada(dimensiones.largo) && 
           validarEntrada(dimensiones.ancho) && 
           validarEntrada(dimensiones.alto);
  };

  return (
    <Card className="border-slate-200/50 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center text-xl text-slate-800">
          <Ruler className="w-6 h-6 text-blue-600 mr-3" />
          Introduce las Dimensiones de tu Maleta
        </CardTitle>
        <p className="text-slate-600 mt-2">
          Ingresa las medidas exactas de tu equipaje de mano en centímetros.
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="largo" className="text-sm font-medium text-slate-700 flex items-center">
              Largo (cm)
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="largo"
              type="number"
              min="0"
              step="1"
              placeholder="Ej: 55"
              value={dimensiones.largo}
              onChange={(e) => handleInputChange('largo', e.target.value)}
              className={`h-12 border-slate-200/50 focus:border-blue-400 focus:ring-blue-400/20 ${
                dimensiones.largo && !validarEntrada(dimensiones.largo) 
                  ? 'border-red-300 focus:border-red-400' 
                  : ''
              }`}
            />
            {dimensiones.largo && !validarEntrada(dimensiones.largo) && (
              <p className="text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                Número inválido
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ancho" className="text-sm font-medium text-slate-700 flex items-center">
              Ancho (cm)
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="ancho"
              type="number"
              min="0"
              step="1"
              placeholder="Ej: 40"
              value={dimensiones.ancho}
              onChange={(e) => handleInputChange('ancho', e.target.value)}
              className={`h-12 border-slate-200/50 focus:border-blue-400 focus:ring-blue-400/20 ${
                dimensiones.ancho && !validarEntrada(dimensiones.ancho) 
                  ? 'border-red-300 focus:border-red-400' 
                  : ''
              }`}
            />
             {dimensiones.ancho && !validarEntrada(dimensiones.ancho) && (
              <p className="text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                Número inválido
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="alto" className="text-sm font-medium text-slate-700 flex items-center">
              Alto (cm)
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="alto"
              type="number"
              min="0"
              step="1"
              placeholder="Ej: 25"
              value={dimensiones.alto}
              onChange={(e) => handleInputChange('alto', e.target.value)}
              className={`h-12 border-slate-200/50 focus:border-blue-400 focus:ring-blue-400/20 ${
                dimensiones.alto && !validarEntrada(dimensiones.alto) 
                  ? 'border-red-300 focus:border-red-400' 
                  : ''
              }`}
            />
             {dimensiones.alto && !validarEntrada(dimensiones.alto) && (
              <p className="text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                Número inválido
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="peso" className="text-sm font-medium text-slate-700">
              Peso (kg)
              <span className="text-slate-400 text-xs ml-1">(opcional)</span>
            </Label>
            <Input
              id="peso"
              type="number"
              min="0"
              step="0.1"
              placeholder="Ej: 8.5"
              value={dimensiones.peso}
              onChange={(e) => handleInputChange('peso', e.target.value)}
              className={`h-12 border-slate-200/50 focus:border-blue-400 focus:ring-blue-400/20 ${
                dimensiones.peso && !validarEntrada(dimensiones.peso) 
                  ? 'border-red-300 focus:border-red-400' 
                  : ''
              }`}
            />
             {dimensiones.peso && !validarEntrada(dimensiones.peso) && (
              <p className="text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                Número inválido
              </p>
            )}
          </div>
        </div>

        <div className="pt-4">
          <Button
            onClick={onVerificar}
            disabled={!sePuedeVerificar()}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="w-5 h-5 mr-2" />
            Verificar Ahora
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}