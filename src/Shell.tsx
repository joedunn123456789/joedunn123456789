import { Outlet, Link } from "react-router-dom"

export default function Shell() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="flex gap-4 p-4 bg-brand text-white font-bold">
        <Link to="/">Home</Link>
        <Link to="/resume">Résumé</Link>
        <Link to="/crm">CRM</Link>
        <Link to="/store">Store</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-800 text-gray-200 text-center">
        © {new Date().getFullYear()} Joseph Dunn — All Rights Reserved
      </footer>
    </div>
  )
}
