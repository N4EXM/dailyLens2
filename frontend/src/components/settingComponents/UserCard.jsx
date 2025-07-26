import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const UserCard = ({ editFunction, toggleWarningBox }) => {

  const { user } = useAuth()

  return (
    <div className='flex flex-col p-5 gap-2 bg-secBackground dark:bg-secDarkBackground rounded-md relative'>

        <div className='w-full flex items-start justify-between'>
          <p className='font-semibold '>User Details</p>
          <div className='w-fit  gap-2 flex flex-row items-center'>
            <button onClick={editFunction} className='bg-primary dark:bg-darkPrimary p-2 rounded-full active:bg-secondary dark:active:bg-darkSecondary duration-200'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="#ffffff" viewBox="0 0 24 24" >
                <path d="M11 18h11v2H11zM13.29 4.29 11.5 6.08l4.41 4.41L17.7 8.7a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0M10.09 7.5 2.3 15.29a1 1 0 0 0-.29.71v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l7.79-7.79-4.41-4.41Z"></path>
              </svg>
            </button>
            <button onClick={toggleWarningBox} className='p-2 bg-rose-500 dark:bg-red-500 rounded-full active:bg-rose-400 dark:active:bg-red-400 duration-200 text-white'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M9 13h7v-2H9V7l-6 5 6 5z"></path><path d="M19 3h-7v2h7v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
              </svg>
            </button>
          </div>
          
        </div>

        <div className='flex flex-row items-start gap-4 justify-start'>
          
          <div className='relative'>
            <div className={`w-16 h-16 object-center ${user.image === null ? "" : "p-1"} rounded-full bg-background dark:bg-darkBackground border-2 border-primary dark:border-darkPrimary`}>
              {user.image === null ? 
                  <i className='w-full h-full flex items-center justify-center text-text dark:text-darkText'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  
                      fill="currentColor" viewBox="0 0 24 24" >
                      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1"></path>
                    </svg>
                  </i>
                  
                : 
                  <img src={user.image} className='w-full h-full rounded-full' alt="" />
              }
            </div>
          </div>  
          <div className='w-fit gap-0.5 h-full flex flex-col items-start justify-start'>
            <h1 className='font-bold text-lg'>@{user.username}</h1>
            <p className='text-xs text-text/60 dark:text-darkText/80'>{user.email}</p>
            <p className='text-xs text-text/60 dark:text-darkText/80'>{user.first_name} {user.last_name}</p>
          </div>

        </div>

        
    </div>  
  )
}

export default UserCard