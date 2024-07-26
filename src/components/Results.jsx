import { useEffect, useState } from 'react';

function Results({ query, isSubmit }) {
  const apiKey = import.meta.env.VITE_APP_API_KEY
  const searchEngineID = import.meta.env.VITE_SEARCH_ENGINE_ID
  const URL = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineID}&q=${query}`

  return (
    <div className='p-5 h-[77vh] overflow-y-scroll border border-red-500'>
    
    </div>
  );
}

export default Results;
