import { useState } from "react"
import Navbar from "./components/Navbar"
import Results from "./components/Results"
import Footer from "./components/Footer"

function Layout({results}) {
  const [darkTheme, setDarkTheme] = useState(false)
  const [query, setQuery] = useState(null)
  const [isSubmit, setIsSubmit] = useState(false)
 
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} setQuery={setQuery} isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
      </div>
      {results ? <Results query={query} isSubmit={isSubmit} /> : null}
      <Footer/>
    </div>
  )
}

export default Layout
