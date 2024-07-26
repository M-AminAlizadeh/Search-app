import { Link } from "react-router-dom"
import searchIcon from '../assets/go-search-icon.png'

function Search({ setQuery, isSubmit, setIsSubmit }) {
  const handleSearch = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div className="relative rounded-full">
      <input className="py-2 px-4 rounded-full border border-blue-400 dark:bg-black dark:text-white" type="text" onChange={(e) => handleSearch(e)} placeholder="Enter something"/>
      <Link to="/search" onClick={() => setIsSubmit(!isSubmit)} className="border border-blue-400 flex justify-center items-center bg-white dark:bg-black p-2 absolute top-0 bottom-0 right-0 rounded-r-full">
        <img width="28" src={searchIcon} alt="magnifying-glass-icon" />
      </Link>
    </div>
  )
}

export default Search
