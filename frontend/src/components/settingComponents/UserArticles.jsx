import React, { useState } from 'react'

const UserArticles = ({}) => {

  return (
    <div className='p-3 pl-4 w-full h-fit items-center justify-between flex flex-row rounded-md bg-secBackground dark:bg-secDarkBackground border border-text/20 dark:border-darkText/20'>
      <h1 className='font-semibold text-sm'>Your Articles</h1>
      <button className='p-1 text-text dark:text-darkText'>
        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
          fill="currentColor" viewBox="0 0 24 24" >
          <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path>
        </svg>
      </button>
    </div>
  )
}

export default UserArticles