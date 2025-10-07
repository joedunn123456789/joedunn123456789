import { Routes, Route } from "react-router-dom"
import Shell from "./Shell"

function Home() { return <h1 className="text-3xl font-bold">Home Page</h1> }
function Resume() { return <h1 className="text-3xl font-bold">Résumé Module</h1> }
function CRM() { return <h1 className="text-3xl font-bold">CRM Module</h1> }
function Store() { return <h1 className="text-3xl font-bold">Store Module</h1> }
function Analytics() { return <h1 className="text-3xl font-bold">Analytics Module</h1> }

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Shell/>}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="crm" element={<CRM />} />
        <Route path="store" element={<Store />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  )
}
