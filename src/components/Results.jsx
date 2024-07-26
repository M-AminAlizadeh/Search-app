import { useEffect, useState } from 'react';

function Results({query, isSubmit}) {
  const [results, setResults] = useState(null)
  const [relatedTopics, setRelatedTopics] = useState(null)
  const [abstract, setAbstract] = useState('')
  const url = `http://api.duckduckgo.com/?q=${query}&format=json&atb=v414-1`;

  const getResults = async() => {
    const response = await fetch(url);
    const result  = await response.json();
    console.log(result)
    setResults(result.Results)
    setRelatedTopics(result.RelatedTopics)
    console.log(relatedTopics)
    setAbstract(result.Abstract)
    // setData(result.results)
    return result
  }
  useEffect(()=>{
    getResults()
  }, [isSubmit])

  return (
    <div className='overflow-scroll border border-red-500'>
      <p>{abstract}</p>
      
      {results && results.map(({FirstURL, Result, Text})=>{
        return(
          <div className='border-2 border-green-800'>
            {/* <a href={FirstURL}>link</a> */}
          </div>
        )
      })}
      
      {(relatedTopics && relatedTopics.map(({ FirstURL, Result, Text }) => {
        return (
          <div className='flex-col gap-3 border-2 border-pink-900'>
            <h3>{Text}</h3>
            <a href={FirstURL}>link</a>
            <p>{Result}</p>
          </div>
        )
      }))}
      
      <hr/>
    </div>
  );
}

export default Results;
