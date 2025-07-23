import React from 'react'
import articles from '../articles'
import NewsCard from '../components/generalComponents/NewsCard'
import { useAuth } from '../context/AuthContext' 
import { Link } from 'react-router-dom'

const Bookmarked = () => {
  
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return (
      <div className='w-full h-full p-5 flex flex-col gap-5 pb-24 z-10 relative bg-background dark:bg-darkBackground'>
      
        <div className='w-full flex flex-row items-center gap-3'>
          <p className='text-lg font-semibold'>Read Later</p>
        </div>

        <div className='w-full h-full flex flex-col gap-2'>
          {articles.map((article, _) => (
            <NewsCard
              key={article.id}
              articleImage={article.articleImage}
              authorImage={article.authorImage}
              title={article.title}
              authorName={article.authorName}
              date={article.date}
              category={article.category[0]}
            />
          ))}
        </div>

      </div>
    )
    
  }
  else {
    return (
      <div className='w-full h-full p-5 flex flex-col items-center justify-center gap-5 pb-24 z-10 relative bg-background dark:bg-darkBackground min-h-screen'>
        <h1
          className='text-lg font-semibold text-text/70 dark:text-darkText/70'
        >
          sign in to save articles
        </h1>
        <Link
          to={"/login"}
          className='text-sm text-darkText bg-primary p-2 font-medium px-5 rounded-md dark:bg-darkPrimary'        
        >
          Sign in
        </Link>
      </div>
    )
  }
}

export default Bookmarked