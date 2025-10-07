import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-auto px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
