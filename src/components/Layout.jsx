import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Plane, Search, Lightbulb } from 'lucide-react'

const Layout = ({ children }) => {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
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

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/') 
                    ? 'bg-blue-100 text-blue-700 shadow-sm' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Search className="w-4 h-4" />
                <span className="font-medium">Verificador</span>
              </Link>
              <Link
                to="/travel-tips"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/travel-tips') 
                    ? 'bg-blue-100 text-blue-700 shadow-sm' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span className="font-medium">Consejos</span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold">Verificador de Equipaje</h3>
            </div>
            <p className="text-slate-400 mb-4">
              Herramienta gratuita para verificar las dimensiones y peso de tu equipaje
            </p>
            <p className="text-sm text-slate-500">
              © 2024 Verificador de Equipaje. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout