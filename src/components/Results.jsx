import { useEffect, useState } from 'react';
import Loading from './Loading';

function Results({ query, isSubmit }) {
  const apiKey = import.meta.env.VITE_APP_API_KEY
  const searchEngineID = import.meta.env.VITE_SEARCH_ENGINE_ID
  const URL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineID}&q=${query}`
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const getResults = async () => {
    try {
      setLoading(true)
      const res = await fetch(URL)
      const data = await res.json()
      console.log(data)
      setResults(data.items)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSubmit) {
      getResults()
    }
  }, [isSubmit])

  if(loading) return <Loading />

  return (
    <div className='p-5 h-[77vh] overflow-y-scroll border border-red-500'>
      {results.map((result, index) => {
        return (
          <div key={index} className='mb-5'>
            <a href={result.link} target='_blank' rel='noreferrer'>
              <h5 className=' text-blue-500'>{result.title}</h5>
            </a>
            <p>{result.snippet}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Results;
