import brandIcon from '../assets/search-icon.png'
import { Link } from 'react-router-dom'
import Search from './Search'

function Navbar({darkTheme, setDarkTheme, setQuery}) {
  const handleTheme = () => setDarkTheme(!darkTheme)
  const searchLinks = [
    {
      label: '🔎 All',
      to: '/search/all'
    },
    {
      label: '🖼 Images',
      to: '/search/images'
    },
    {
      label: '🎞 Videos',
      to: '/search/videos'
    },
    {
      label: '📰 News',
      to: '/search/news'
    },
]

  return (
    <nav className="flex flex-col gap-3">
      <div className="flex flex-wrap justify-between items-center px-5 py-5">
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
      </div>
      {/* Search links */}
      <ul className='border-b-2 p-3 bg-white dark:bg-slate-600 flex justify-start items-center gap-5'>
        {searchLinks.map(({label, to}) => {
          return (
            <li>
              <Link to={to} className='p-2 border-blue-600 dark:text-white dark:hover:text-red-300 hover:text-blue-600 hover:border-b-2 font-bold'>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar

