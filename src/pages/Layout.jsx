
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Plane, Search, Info } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>
        {`
          :root {
            --primary: #1e40af;
            --primary-light: #3b82f6;
            --secondary: #059669;
            --accent: #f1f5f9;
            --text-primary: #0f172a;
            --text-secondary: #475569;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            font-feature-settings: "cv02", "cv03", "cv04", "cv11";
            letter-spacing: -0.01em;
          }
          
          .glass-effect {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
      
      {/* Header elegante */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to={createPageUrl("VerificadorEquipaje")} 
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Verificador de Equipaje
                </h1>
                <p className="text-xs text-slate-500 -mt-1">Viaja sin preocupaciones</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to={createPageUrl("VerificadorEquipaje")} 
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPageName === "VerificadorEquipaje" 
                    ? "text-blue-700" 
                    : "text-slate-600 hover:text-blue-700"
                }`}
              >
                Verificador
              </Link>
              <Link 
                to={createPageUrl("ConsejosViaje")} 
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPageName === "ConsejosViaje" 
                    ? "text-blue-700" 
                    : "text-slate-600 hover:text-blue-700"
                }`}
              >
                Consejos
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer elegante */}
      <footer className="border-t border-slate-200/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-slate-800">Verificador de Equipaje</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                La herramienta más confiable para verificar las políticas de equipaje de aerolíneas. 
                Viaja con confianza y evita sorpresas en el aeropuerto.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Recursos</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("VerificadorEquipaje")} className="block text-sm text-slate-600 hover:text-blue-700 transition-colors">
                  Verificar Equipaje
                </Link>
                <Link to={createPageUrl("ConsejosViaje")} className="block text-sm text-slate-600 hover:text-blue-700 transition-colors">
                  Consejos de Viaje
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Información</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mantenemos nuestra base de datos actualizada con las políticas más recientes 
                de las principales aerolíneas del mundo.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-200/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              © 2024 Verificador de Equipaje. Información actualizada regularmente.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-slate-400">Última actualización: Enero 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
