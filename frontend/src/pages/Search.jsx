import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

  const [searchQuery, setSearchQuery] = useState("")

  const clearSearchQuery = () => {
    setSearchQuery("")
  }

  const navigate = useNavigate()

  return (
    <div className='w-full min-h-screen h-full p-5 flex flex-col gap-5 pb-24 z-10 relative bg-background dark:bg-darkBackground'>
      
      <div
        className='flex flex-row items-center justify-start gap-2'
      >
        <button 
          onClick={() => navigate(-1)} 
          className='p-2 rounded-full w-fit bg-primary dark:bg-darkPrimary text-darkText'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
          </svg>
        </button>
        <div className='w-full h-fit relative'>
          <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='Search an article...' className='text-sm w-full h-fit bg-secBackground dark:bg-secDarkBackground p-2 pl-9 rounded-md border border-text/20 dark:border-darkText/20 outline-none'/>
          <i className='absolute top-3 left-2.5 dark:text-darkText/60 text-text/60'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z"></path>
            </svg>
          </i>
          <button onClick={() => clearSearchQuery()} className='absolute top-3 right-3 w-fit h-fit'>
            <i className='dark:text-darkText/60 text-text/60'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                fill="currentColor" viewBox="0 0 24 24"  
                transform="rotate(45)">
                <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
              </svg>
            </i>
          </button>
        
        </div>
      </div>

    </div>
  )
}

export default Search