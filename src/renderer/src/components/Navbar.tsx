import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">KeyBind Manager</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/edit-keybind" className="hover:underline">
              Modifier KeyBind
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
