import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EditKeyBindPage from './pages/EditKeyBindPage'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-keybind" element={<EditKeyBindPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
