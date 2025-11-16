import { useState } from "react"
import { Link } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi" // npm install react-icons

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/knowledge-base", label: "Knowledge Base" },
  { to: "/resume", label: "Résumé" },
  { to: "/resume-builder", label: "Resume Builder" },
  { to: "/cover-letter-builder", label: "Cover Letter Builder" },
  { to: "/crm", label: "CRM" },
  { to: "/store", label: "Store" },
  { to: "/analytics", label: "Analytics" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-brand text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand / Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          Joseph Dunn
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-gray-200">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
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
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
