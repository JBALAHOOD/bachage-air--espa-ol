import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import BaggageChecker from './pages/BaggageChecker'
import TravelTips from './pages/TravelTips'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BaggageChecker />} />
          <Route path="/baggage-checker" element={<BaggageChecker />} />
          <Route path="/travel-tips" element={<TravelTips />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App