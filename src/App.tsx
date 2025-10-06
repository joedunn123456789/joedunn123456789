import { Routes, Route, Link } from "react-router-dom"

function Home() {
  return <h1 className="text-3xl font-bold">Home Page</h1>
}

function Resume() {
  return <h1 className="text-3xl font-bold">Résumé Module</h1>
}

function CRM() {
  return <h1 className="text-3xl font-bold">CRM Module</h1>
}

function Store() {
  return <h1 className="text-3xl font-bold">Store Module</h1>
}

function Analytics() {
  return <h1 className="text-3xl font-bold">Analytics Module</h1>
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex gap-4 p-4 bg-brand text-white font-bold">
        <Link to="/">Home</Link>
        <Link to="/resume">Résumé</Link>
        <Link to="/crm">CRM</Link>
        <Link to="/store">Store</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/store" element={<Store />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
