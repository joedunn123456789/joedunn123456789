import { HashRouter as Router, Routes, Route } from "react-router-dom"  // ← Change this line
import Shell from "./Shell"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import CRM from "./pages/CRM"
import Store from "./pages/Store"
import Analytics from "./pages/Analytics"

export default function App() {
  return (
    <Router>  {/* ← This now uses HashRouter */}
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="crm" element={<CRM />} />
          <Route path="store" element={<Store />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  )
}