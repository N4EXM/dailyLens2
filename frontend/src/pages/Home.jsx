import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import articles from '../articles'
import BigNewsCard from '../components/homeComponents/BigNewsCard'
import CategoryButton from '../components/homeComponents/CategoryButton'
import NewsCard from '../components/generalComponents/NewsCard'


const Home = () => {

  const [currentCategory, setCurrentCategory] = useState("")
  const [currentArticles] = useState(articles)
  const [filteredArticles, setFilteredArticles] = useState(articles)
  const firstThreeArticles = currentArticles.length > 3 ? currentArticles.slice(0, 3) : currentArticles;

  const navigate = useNavigate()

  const handleSearchNavigate = () => {

    navigate("/Search")

  }

  const categoryButtons = [
    {
      id:0,
      name: "Recommended",
      icon: <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="14" viewBox="0 -960 960 960" width="14" fill="currentcolor"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/>
            </svg>
    },
    {
      id:1,
      name: "Tech",
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="m21,4H3c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM3,18V6h18v12s-18,0-18,0Z"></path><path d="M5 8H7V10H5z"></path><path d="M8 8H10V10H8z"></path><path d="M11 8H13V10H11z"></path><path d="M14 8H16V10H14z"></path><path d="M17 8H19V10H17z"></path><path d="M5 11H7V13H5z"></path><path d="M8 11H10V13H8z"></path><path d="M8 14H16V16H8z"></path><path d="M11 11H13V13H11z"></path><path d="M14 11H16V13H14z"></path><path d="M17 11H19V13H17z"></path>
            </svg>
    },
    {
      id:2,
      name: "Finance",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M4 2H2v19c0 .55.45 1 1 1h19v-2H4z"></path><path d="M17 12h2v6h-2zM12 4h2v14h-2zM7 9h2v9H7z"></path>
            </svg>
    },
    {
      id:3,
      name: "Sports",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="M20 18A2 2 0 1 0 20 22 2 2 0 1 0 20 18z"></path><path d="m19.08,15.08c3.4-3.4,3.89-8.45,1.09-11.25-2.8-2.8-7.85-2.31-11.25,1.09-2.72,2.72-3.57,6.48-2.38,9.31,0,.5-.1.99-.32,1.49-.31.56-.65,1.11-1,1.64l-2.9,2.9c-.29.29-.29.77,0,1.06l.35.35c.29.29.77.29,1.06,0l2.9-2.9c.53-.35,1.08-.69,1.64-1,.5-.22.98-.31,1.49-.32.83.35,1.75.53,2.69.53,2.27,0,4.71-.99,6.62-2.91Zm-6.72.92l.64-.64.54.54c-.4.07-.8.11-1.19.1Zm-4.26-5.54l.54.54-.64.64c0-.39.03-.79.1-1.19Zm6.9-5.1l1.65,1.65-1.65,1.65-1.65-1.65,1.65-1.65Zm-2,1.29l-1.37-1.37c.72-.49,1.49-.83,2.25-1.04l.77.77-1.65,1.65Zm6.9,2.9l-.54-.54.64-.64c0,.39-.03.79-.1,1.19Zm-6.9,5.1l-1.65-1.65,1.65-1.65,1.65,1.65-1.65,1.65Zm2-1.29l1.37,1.37c-.72.48-1.49.83-2.25,1.04l-.77-.77,1.65-1.65Zm-5.57,1.57l1.57-1.57,1.65,1.65-.95.95c-.86-.12-1.64-.46-2.27-1.02Zm-.35-.35c-.56-.63-.9-1.42-1.02-2.27l.95-.95,1.65,1.65-1.57,1.57Zm4.28-3.57l1.65-1.65,1.65,1.65-1.65,1.65-1.65-1.65Zm2-2l1.65-1.65,1.65,1.65-1.65,1.65-1.65-1.65Zm3.65.35l.77.77c-.21.76-.56,1.53-1.04,2.25l-1.37-1.37,1.65-1.65Zm0-.71l-1.65-1.65,1.57-1.57c.56.63.9,1.42,1.02,2.27l-.95.95Zm-2-2l-1.65-1.65.94-.94c.86.12,1.63.46,2.27,1.02l-1.56,1.56Zm-2.35,2.35l-1.65,1.65-1.65-1.65,1.65-1.65,1.65,1.65Zm-2,2l-1.65,1.65-1.65-1.65,1.65-1.65,1.65,1.65Zm-3.65-.35l-.77-.77c.21-.76.56-1.53,1.04-2.25l1.37,1.37-1.65,1.65Zm7.78,3.78l-1.43-1.43,1.65-1.65,1.43,1.43c-.23.3-.48.6-.76.88-.28.28-.58.53-.88.76Zm-1.24-10.43s.07,0,.1,0l-.64.64-.54-.54c.36-.07.73-.11,1.08-.11Zm-4.32,1.58l1.43,1.43-1.65,1.65-1.43-1.43c.23-.3.48-.6.76-.88s.58-.53.88-.76Z"></path>
            </svg>
    },
    {
      id:4,
      name: "Gaming",
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M21 5H3c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h14c2.21 0 4-1.79 4-4V7c0-1.1-.9-2-2-2M5 17c-1.1 0-2-.9-2-2V7h4v10zm4 0V7h6v10zm12-2c0 1.1-.9 2-2 2h-2V7h4z"></path><path d="M19 8a1 1 0 1 0 0 2 1 1 0 1 0 0-2M5 8a1 1 0 1 0 0 2 1 1 0 1 0 0-2M4 11h2v2H4zM18 11h2v2h-2z"></path>
            </svg>
    },
  ]

  const handleCategory = (category) => {

    setCurrentCategory(category)

    if (category === "none") {
      setFilteredArticles(currentArticles)
    }
    else {
      setFilteredArticles(currentArticles.filter((article) => article.category.includes(category)))
    }
  }

  useEffect(() => {
    handleCategory("Recommended")
    console.log(currentCategory)
  }, [])

  return (
    <div className='w-full h-full p-5 flex flex-col gap-5 pb-24 relative z-10'>

      {/* top bar */}
      <div className='w-full h-fit flex flex-row items-center justify-between pr-2 '>

        <div className='w-fit gap-2 flex flex-row items-center justify-start'>
          <p className='font-semibold text-lg text-darkText'>What's New</p>
        </div>

        {/* search button link */}
        <button onClick={() => handleSearchNavigate()} className='text-darkText'>
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z"></path>
          </svg>
        </button>

      </div>
        
      {/* bigNewsCard carousel */}
      <div className='w-full overflow-x-scroll flex flex-row items-center gap-3 scrollbar-hide'>
        {firstThreeArticles.map((article,_) => (
          <BigNewsCard
            key={article.id}
            id={article.id}
            articleImage={article.articleImage}
            authorImage={article.authorImage}
            title={article.title}
            authorName={article.authorName}
            date={article.date}
            content={article.content}
          />
        ))}
      </div>

      {/* different category buttons */}
      <div className='w-full overflow-x-scroll flex flex-row items-center gap-3 scrollbar-hide'>
        {categoryButtons.map((category, _) => (
          <CategoryButton
            currentCategory={currentCategory}
            key={category.id}
            name={category.name}
            icon={category.icon}
            handleCategory={() => handleCategory(category.name)}
          />
        ))}
      </div>

      {/* article cards */}
      <div className="flex flex-col w-full h-full gap-2">
        {filteredArticles.map((article, _) => (
          <NewsCard
            key={article.id}
            id={article.id}
            articleImage={article.articleImage}
            authorImage={article.authorImage}
            title={article.title}
            authorName={article.authorName}
            date={article.date}
            category={article.category[0]}
            content={article.content}
          />
        ))}
      </div>

    </div>
  )
}

export default Home