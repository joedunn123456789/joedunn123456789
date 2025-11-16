import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Shell from "./Shell"

// Lazy load all page components for better code splitting
const Home = lazy(() => import("./pages/Home"))
const Resume = lazy(() => import("./pages/Resume"))
const ResumeBuild = lazy(() => import("./pages/ResumeBuild"))
const CoverLetterBuild = lazy(() => import("./pages/CoverLetterBuild"))
const CRM = lazy(() => import("./pages/CRM"))
const Store = lazy(() => import("./pages/Store"))
const Analytics = lazy(() => import("./pages/Analytics"))
const Projects = lazy(() => import("./pages/Projects"))
const About = lazy(() => import("./pages/About"))
const KnowledgeBase = lazy(() => import("./pages/KnowledgeBase"))
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"))


export default function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="resume-builder" element={<ResumeBuild />} />
          <Route path="cover-letter-builder" element={<CoverLetterBuild />} />
          <Route path="crm" element={<CRM />} />
          <Route path="store" element={<Store />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="about" element={<About />} />
          <Route path="knowledge-base" element={<KnowledgeBase />} />
          <Route path="knowledge-base/:slug" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
