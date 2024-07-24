import brandIcon from '../assets/search-icon.png'
import { Link } from 'react-router-dom'
import Search from './Search'

function Navbar({darkTheme, setDarkTheme, setQuery}) {
  const handleTheme = () => setDarkTheme(!darkTheme)

  return (
    <nav className="border-b p-5 flex flex-wrap justify-center items-center sm:justify-between">
      {/* Brand name link */}
      <Link to="/">
        <div className="flex justify-start items-center py-1 px-2 rounded bg-blue-600 text-white dark:text-black dark:bg-white">
          <h1 className="font-bold text">Brand Name</h1>
          <img width="40" src={brandIcon} alt="search"/>
        </div>
      </Link>
      {/* Search bar */}
      <Search setQuery={setQuery} />
      {/* Dark/light mode */}
      <button className='text-lg p-2 bg-black text-white rounded-full hover:shadow-lg dark:text-black dark:bg-white' onClick={handleTheme}>
        {darkTheme ? 'Light ☀️': 'Dark 🌒'}
      </button>
    </nav>
  )
}

export default Navbar

