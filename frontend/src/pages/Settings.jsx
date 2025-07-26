import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UserCard from '../components/settingComponents/UserCard'
import UserArticles from '../components/settingComponents/UserArticles'
import GeneralSettings from '../components/settingComponents/GeneralSettings'
import userImage from '../assets/userImage.png'
import { useAuth } from '../context/AuthContext'

const Settings = () => {

  const [warningBox, setWarningBox] = useState(false)
  const { isAuthenticated } = useAuth()

  const navigate = useNavigate()
    
  const handleNavigate = (page) => {
    navigate(`/${page}`)
  }

  const toggleWarningBox = () => {
    setWarningBox(true)
  }  

  if (isAuthenticated) {
  
    return (
      <div className={`w-full h-full p-5 flex flex-col gap-5 pb-24 z-10 relative ${warningBox && "blur-lg"}`}>

        <div className='flex items-center gap-3'>
          <p className='text-lg font-semibold text-darkText'>Settings</p>
        </div>

        <UserCard
          editFunction={() => handleNavigate("UserEdit")}
          toggleWarningBox={() => toggleWarningBox()}
        />

        <div className='flex flex-col gap-4 pt-2 w-full h-full'>
          <UserArticles/>
          <GeneralSettings/>
        </div>

      </div>
    
  )}
  else {
    return (
      <div className='w-full h-full p-5 flex flex-col items-center justify-center gap-5 pb-24 z-10 relative bg-background dark:bg-darkBackground min-h-screen'>
        <h1
          className='text-lg font-semibold text-text/70 dark:text-darkText/70'
        >
          sign in to Change settings
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

export default Settings