import { Routes, Route } from "react-router-dom"
import Shell from "./Shell"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import ResumeBuild from "./pages/ResumeBuild" // Add this import
import CRM from "./pages/CRM"
import Store from "./pages/Store"
import Analytics from "./pages/Analytics"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="resume-builder" element={<ResumeBuild />} /> {/* Add this line */}
        <Route path="crm" element={<CRM />} />
        <Route path="store" element={<Store />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  )
}
