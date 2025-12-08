import React from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Createnote from './pages/Createnote.jsx'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Createnote />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
