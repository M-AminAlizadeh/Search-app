import { useState } from "react"
import Navbar from "./components/Navbar"
import Results from "./components/Results"
import Footer from "./components/Footer"

function Layout({results}) {
  const [darkTheme, setDarkTheme] = useState(false)
  const [query, setQuery] = useState(null)
 
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} setQuery={setQuery} />
      </div>
      {results ? <Results query={query}/> : null}
      <Footer/>
    </div>
  )
}

export default Layout
