import { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App(): JSX.Element {
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
