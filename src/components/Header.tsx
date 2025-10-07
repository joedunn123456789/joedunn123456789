import { useState } from "react"
import { Link } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi" // npm install react-icons

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-brand text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          Joseph Dunn
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/resume" className="hover:text-gray-200">Résumé</Link>
          <Link to="/crm" className="hover:text-gray-200">CRM</Link>
          <Link to="/store" className="hover:text-gray-200">Store</Link>
          <Link to="/analytics" className="hover:text-gray-200">Analytics</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium bg-brand/95">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/resume" onClick={() => setOpen(false)}>Résumé</Link>
          <Link to="/crm" onClick={() => setOpen(false)}>CRM</Link>
          <Link to="/store" onClick={() => setOpen(false)}>Store</Link>
          <Link to="/analytics" onClick={() => setOpen(false)}>Analytics</Link>
        </nav>
      )}
    </header>
  )
}
