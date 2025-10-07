import { Outlet } from "react-router-dom"
import Header from "./components/Header"

export default function Shell() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-800 text-gray-200 text-center">
        © {new Date().getFullYear()} Joseph Dunn — All Rights Reserved
      </footer>
    </div>
  )
}
