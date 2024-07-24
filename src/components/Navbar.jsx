import brandIcon from '../assets/search-icon.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="border-b p-5 flex flex-wrap justify-center items-center sm:justify-between">
      {/* Brand name link */}
      <Link to="/">
        <div className="flex border justify-start items-center py-1 px-2 rounded bg-white">
          <h1 className="font-bold">Brand Name</h1>
          <img width="40" src={brandIcon} alt="search"/>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar

