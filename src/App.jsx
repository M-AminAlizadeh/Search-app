import { useState } from "react"
import Navbar from "./components/Navbar"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
 
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar />
      </div>
    </div>
  )
}

export default App
