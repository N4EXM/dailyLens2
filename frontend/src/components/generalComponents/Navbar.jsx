import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import NavButton from './NavButton'


const Navbar = () => {

  const navigate = useNavigate()

  const handleNavigate = (link) => {
    navigate(`${link}`)
  } 

  const location = useLocation()

  const navButton = [
    {
      id: 0,
      link: "/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.4 0 .77-.24.92-.62.15-.37.07-.8-.22-1.09l-8.99-9a.996.996 0 0 0-1.41 0l-9.01 9c-.29.29-.37.72-.22 1.09s.52.62.92.62Zm7 7v-5h4v5zm2-15.59 6 6V20h-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5H6v-9.59z"></path>
            </svg>
    },
    {
      id: 1,
      link: "/Bookmarked",
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V21c0 .35.18.67.47.85s.66.2.97.04l5.55-2.78 5.55 2.78a.997.997 0 0 0 1.45-.89v-8h4c.55 0 1-.45 1-1V5.5c0-1.93-1.57-3.5-3.5-3.5ZM15 19.38l-4.55-2.28a1 1 0 0 0-.89 0l-4.55 2.28V5.5c0-.83.67-1.5 1.5-1.5h8.85c-.22.46-.35.96-.35 1.5v13.88ZM20 11h-3V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path>
            </svg>
    },
    {
      id: 2,
      link: "/Settings",
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.08 0-2-.92-2-2s.92-2 2-2 2 .92 2 2-.92 2-2 2"></path><path d="m20.42 13.4-.51-.29c.05-.37.08-.74.08-1.11s-.03-.74-.08-1.11l.51-.29c.96-.55 1.28-1.78.73-2.73l-1-1.73a2.006 2.006 0 0 0-2.73-.73l-.53.31c-.58-.46-1.22-.83-1.9-1.11v-.6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.6c-.67.28-1.31.66-1.9 1.11l-.53-.31c-.96-.55-2.18-.22-2.73.73l-1 1.73c-.55.96-.22 2.18.73 2.73l.51.29c-.05.37-.08.74-.08 1.11s.03.74.08 1.11l-.51.29c-.96.55-1.28 1.78-.73 2.73l1 1.73c.55.95 1.77 1.28 2.73.73l.53-.31c.58.46 1.22.83 1.9 1.11v.6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6a8.7 8.7 0 0 0 1.9-1.11l.53.31c.95.55 2.18.22 2.73-.73l1-1.73c.55-.96.22-2.18-.73-2.73m-2.59-2.78c.11.45.17.92.17 1.38s-.06.92-.17 1.38a1 1 0 0 0 .47 1.11l1.12.65-1 1.73-1.14-.66c-.38-.22-.87-.16-1.19.14-.68.65-1.51 1.13-2.38 1.4-.42.13-.71.52-.71.96v1.3h-2v-1.3c0-.44-.29-.83-.71-.96-.88-.27-1.7-.75-2.38-1.4a1.01 1.01 0 0 0-1.19-.15l-1.14.66-1-1.73 1.12-.65c.39-.22.58-.68.47-1.11-.11-.45-.17-.92-.17-1.38s.06-.93.17-1.38A1 1 0 0 0 5.7 9.5l-1.12-.65 1-1.73 1.14.66c.38.22.87.16 1.19-.14.68-.65 1.51-1.13 2.38-1.4.42-.13.71-.52.71-.96v-1.3h2v1.3c0 .44.29.83.71.96.88.27 1.7.75 2.38 1.4.32.31.81.36 1.19.14l1.14-.66 1 1.73-1.12.65c-.39.22-.58.68-.47 1.11Z"></path>
            </svg>
    },
  ]

  return (
    <div className={`w-full h-fit p-5 fixed bottom-0 right-0 left-0 z-50 ${location.pathname === "/CreateArticle" || location.pathname === "/Login" || location.pathname === "/SignUp" || location.pathname === "/UserEdit" ? "hidden" : "block"}`}>
      
      <div className='p-2 px-4 flex flex-row bg-secBackground dark:bg-secDarkBackground border border-text/20 dark:border-darkText/20 rounded-xl text-xs items-center justify-between'>
        {/* home button */}
        <NavButton
          icon={navButton[0].icon}
          handleNavigate={() => handleNavigate(navButton[0].link)}
          link={navButton[0].link}
        />
        {/* bookmark button */}
        <NavButton
          icon={navButton[1].icon}
          handleNavigate={() => handleNavigate(navButton[1].link)}
          link={navButton[1].link}
        />
        {/* create post button */}
        <button onClick={() => handleNavigate("/CreateArticle")} className='flex flex-row bg-primary dark:bg-darkPrimary gap-3 pr-5 text-white p-2 items-center justify-start  rounded-lg'>
          <i className='rounded-full text-background flex'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
            </svg>
          </i>
          <p className='font-medium'>Create</p>
        </button>
        {/* settings button */}
        <NavButton
          handleNavigate={() => handleNavigate(navButton[2].link)}
          icon={navButton[2].icon}
          link={navButton[2].link}
        />
      </div>

    </div>
  )
}

export default Navbar