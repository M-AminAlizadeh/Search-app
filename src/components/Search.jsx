import { Link } from "react-router-dom"

function Search({setQuery}) {
  const handleSearch = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div>
      <input type="text" name="" id="" onChange={(e) => handleSearch(e)}/>
      <Link to="/search">search btn</Link>
    </div>
  )
}

export default Search
