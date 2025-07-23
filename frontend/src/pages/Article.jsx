import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Article = () => {

  const navigate = useNavigate()

  const { state } = useLocation()

  const { articleImage, title, authorImage, authorName, date, content, id } = state || {}

  return (
    <div
      className='w-full h-full p-5 flex flex-col gap-5 z-10 relative'
    >

      {/* toggle exit function */}
      <button 
        onClick={() => navigate(-1)} 
        className='p-2 rounded-full w-fit bg-secBackground dark:bg-secDarkBackground'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
        </svg>
      </button>

      <div 
        className='w-full h-44 aspect-3/2'
      >
          <img 
            src={articleImage} 
            alt="" 
            className='rounded-md w-full h-full object-cover'
          />
      </div>

      <div 
          className='w-full h-fit flex flex-row items-center justify-between'
        >
          
          <div 
            className='flex items-center gap-2'
          >
            <img 
              className='size-7 rounded-full' src={authorImage} alt="" 
            />
            <h4 
              className='text-ssm font-medium'
            >
              {authorName}
            </h4>
          </div>

          <p
            className='text-ssm'
          >
            {date}
          </p>

        </div>

      <div 
        className='flex w-full h-fit flex-col gap-6 '
      >
        <h1 
          className='text-lg font-bold px-0.5'
        >
          {title}
        </h1>
        
      </div>

      <p 
        className='text-sm'
      >
        {content}
      </p>

    </div>
  )
}

export default Article