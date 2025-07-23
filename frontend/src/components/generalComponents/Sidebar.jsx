import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavButton from './NavButton'

const Sidebar = () => {

    const [isSidebarActive, setIsSidebarActive] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    const navButtons = [
    {
      id: 0,
      link: "/",
      name: "Home",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.4 0 .77-.24.92-.62.15-.37.07-.8-.22-1.09l-8.99-9a.996.996 0 0 0-1.41 0l-9.01 9c-.29.29-.37.72-.22 1.09s.52.62.92.62Zm7 7v-5h4v5zm2-15.59 6 6V20h-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5H6v-9.59z"></path>
            </svg>
    },
    {
      id: 1,
      name: "Saved Articles",
      link: "/Bookmarked",
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V21c0 .35.18.67.47.85s.66.2.97.04l5.55-2.78 5.55 2.78a.997.997 0 0 0 1.45-.89v-8h4c.55 0 1-.45 1-1V5.5c0-1.93-1.57-3.5-3.5-3.5ZM15 19.38l-4.55-2.28a1 1 0 0 0-.89 0l-4.55 2.28V5.5c0-.83.67-1.5 1.5-1.5h8.85c-.22.46-.35.96-.35 1.5v13.88ZM20 11h-3V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path>
            </svg>
    },
    {
      id: 2,      
      name: "Settings",
      link: "/Settings",
      icon: <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
              fill="currentcolor" viewBox="0 0 24 24" >
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.08 0-2-.92-2-2s.92-2 2-2 2 .92 2 2-.92 2-2 2"></path><path d="m20.42 13.4-.51-.29c.05-.37.08-.74.08-1.11s-.03-.74-.08-1.11l.51-.29c.96-.55 1.28-1.78.73-2.73l-1-1.73a2.006 2.006 0 0 0-2.73-.73l-.53.31c-.58-.46-1.22-.83-1.9-1.11v-.6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.6c-.67.28-1.31.66-1.9 1.11l-.53-.31c-.96-.55-2.18-.22-2.73.73l-1 1.73c-.55.96-.22 2.18.73 2.73l.51.29c-.05.37-.08.74-.08 1.11s.03.74.08 1.11l-.51.29c-.96.55-1.28 1.78-.73 2.73l1 1.73c.55.95 1.77 1.28 2.73.73l.53-.31c.58.46 1.22.83 1.9 1.11v.6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-.6a8.7 8.7 0 0 0 1.9-1.11l.53.31c.95.55 2.18.22 2.73-.73l1-1.73c.55-.96.22-2.18-.73-2.73m-2.59-2.78c.11.45.17.92.17 1.38s-.06.92-.17 1.38a1 1 0 0 0 .47 1.11l1.12.65-1 1.73-1.14-.66c-.38-.22-.87-.16-1.19.14-.68.65-1.51 1.13-2.38 1.4-.42.13-.71.52-.71.96v1.3h-2v-1.3c0-.44-.29-.83-.71-.96-.88-.27-1.7-.75-2.38-1.4a1.01 1.01 0 0 0-1.19-.15l-1.14.66-1-1.73 1.12-.65c.39-.22.58-.68.47-1.11-.11-.45-.17-.92-.17-1.38s.06-.93.17-1.38A1 1 0 0 0 5.7 9.5l-1.12-.65 1-1.73 1.14.66c.38.22.87.16 1.19-.14.68-.65 1.51-1.13 2.38-1.4.42-.13.71-.52.71-.96v-1.3h2v1.3c0 .44.29.83.71.96.88.27 1.7.75 2.38 1.4.32.31.81.36 1.19.14l1.14-.66 1 1.73-1.12.65c-.39.22-.58.68-.47 1.11Z"></path>
            </svg>
    },
    ]
    
    // Check if current path matches any of the hidden routes
    const isHiddenRoute = [
        "/CreateArticle",
        "/Login",
        "/SignUp",
        "/UserEdit",
        "/login",
        "/register",
        "/Search"
    ].includes(location.pathname) || 
    location.pathname.startsWith("/Article/"); // This checks for dynamic article routes

    const handleNavigate = (link) => {
        navigate(`${link}`)
        setIsSidebarActive(false)
    } 

  return (
    <>
        {/* button that appears on nearly every page */}
        <button 
            onClick={() => setIsSidebarActive(true)}
            className={`w-fit h-fit p-3 z-50 bg-primary rounded-full dark:bg-darkPrimary text-darkText fixed bottom-5 right-5 ${isHiddenRoute ? "hidden" : ""}`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"></path>
            </svg>
        </button>
        <div 
            className={`p-5 w-64 h-screen fixed top-0 right-0 z-50 border-l-[2px] border-text/20 dark:border-darkText/20 dark:bg-secDarkBackground transform transition-transform flex duration-300 ease-in-out flex-col gap-28 bg-secBackground ${isSidebarActive ? "translate-x-0" : "translate-x-full"} ${isHiddenRoute ? "hidden" : ""}`}
        >
            
            {/* title and toggle button */}
            <div
                className='w-full h-fit flex flex-row items-center justify-between'
            >
                <button 
                    onClick={() => setIsSidebarActive(false)}
                    className='p-1.5 bg-background dark:bg-darkBackground rounded-full'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
                    </svg>
                </button>
                <h1 
                    className='font-semibold text-lg'
                >
                    DailyLens
                </h1>
            </div>

            {/* nav buttons */}
            <div className='flex flex-col gap-2'>
                {navButtons.map((button,_) => (
                    <NavButton
                        key={button.id}
                        name={button.name}
                        icon={button.icon}
                        handleNavigate={() => handleNavigate(button.link)}
                        link={button.link}
                    />
                ))}
            </div>

            <div className='w-full h-full flex justify-end items-end'>
                <button 
                    onClick={() => handleNavigate("/CreateArticle")}
                    className='flex flow-row items-center justify-center gap-1 pr-5 bottom-5 rounded-md pl-3 text-sm bg-primary w-full h-fit p-2 dark:bg-darkPrimary font-medium text-darkText'
                >
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="m19.41,3c-.78-.78-2.05-.78-2.83,0L4.29,15.29c-.13.13-.22.29-.26.46l-1,4c-.08.34.01.7.26.95.19.19.45.29.71.29.08,0,.16,0,.24-.03l4-1c.18-.04.34-.13.46-.26l12.29-12.29c.78-.78.78-2.05,0-2.83l-1.59-1.59Zm-11.93,15.1l-2.11.53.53-2.11L15,7.41l1.59,1.59-9.1,9.1Zm10.51-10.51l-1.59-1.59,1.59-1.59,1.59,1.58-1.59,1.59Z"></path>
                    </svg>
                    <p>Create article</p>
                </button>
            </div>
            

        </div>
    </>
    
  )
}

export default Sidebar