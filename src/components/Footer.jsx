import { useEffect } from "react"
import { useState } from "react"

function Footer() {
  const [currentYear, setCurrentYear] = useState(null)
  useEffect(() => {
    const date = new Date()
    setCurrentYear(date.getFullYear())
  }, [])
  return (
    <footer className="border border-slate-300 dark:bg-black dark:text-white dark:border-0 absolute bottom-0 left-0 right-0 text-center py-4">
      Crafted with ❤️ by 
      <a href="https://github.com/M-AminAlizadeh" className="mx-1 text-blue-600 hover:border-b-2 hover:border-blue-600" target="_blank">Amin Alizadeh</a>
      ©️ {currentYear}
    </footer>
  )
}

export default Footer
