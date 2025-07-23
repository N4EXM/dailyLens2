import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [contactNumber, setContactNumber] = useState("")

  const navigate = useNavigate()
  
  return (
    <div 
      className='w-full h-full p-5 flex flex-col gap-4 mmo:gap-6 z-10 relative pt-34 mmo:pt-36'
    >
      
      <div 
        className='text-darkText w-full flex flex-col gap-2 h-fit'
      >
        <h1 
          className='text-3xl font-bold'
        >
          Sign Up
        </h1>
        <p 
          className='text-ssm font-medium'
        >
          Enter your details to make a DailyLens account.
        </p>
      </div>

      <form
        className='flex flex-col gap-5 pt-2'
        // onSubmit={(e) => {e.preventDefault()}}
      >

        {/* name */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="emailField" className='text-sm font-medium pl-0.5'>Name:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
              </svg>
            </i>
            <input 
              type="text" 
              placeholder='Enter your Name'
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
            />
          </div>
        </div>

        {/* email */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="emailField" className='text-sm font-medium pl-0.5'>Email:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m20,4H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2Zm-8.61,10.79c.18.14.4.21.61.21s.43-.07.61-.21l1.55-1.21,4.42,4.42H5.41l4.42-4.42,1.55,1.21Zm8.61-8.79v.51s-8,6.22-8,6.22L4,6.51v-.51h16Zm0,3.04v7.54s-4.24-4.24-4.24-4.24l4.24-3.3Zm-11.76,3.3l-4.24,4.24v-7.54l4.24,3.3Zm11.76,5.66h0s0,0,0,0h0Z"></path>
              </svg>
            </i>
            <input 
              type="text" 
              placeholder='Enter your email'
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
            />
          </div>
        </div>

        {/* password */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="passwordField" className='text-sm font-medium pl-0.5'>password:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9H6z"></path>
              </svg>
            </i>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)} 
              className='w-full p-2 pr-10 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
            />
            <span 
              onClick={() => setShowPassword(!showPassword)} 
              className='absolute right-1 p-2 top-[1.2px] text-text/40 dark:text-darkText/40'
            >
              {showPassword ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12 5c-7.63 0-9.93 6.62-9.95 6.68-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68s9.93-6.62 9.95-6.68c.07-.21.07-.43 0-.63C21.93 11.61 19.63 5 12 5m0 12c-5.35 0-7.42-3.84-7.93-5 .5-1.16 2.58-5 7.93-5s7.42 3.85 7.93 5c-.5 1.16-2.58 5-7.93 5"></path><path d="M13.5 12c-.83 0-1.5-.67-1.5-1.5 0-.6.36-1.12.87-1.35-.28-.09-.56-.15-.87-.15-1.64 0-3 1.36-3 3s1.36 3 3 3 3-1.36 3-3c0-.3-.06-.59-.15-.87-.24.51-.75.87-1.35.87"></path>
                </svg>
              :
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03ZM21.95 12.32c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                </svg>
              }
            </span>
          </div>
        </div>

        {/* confirm password */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="passwordField" className='text-sm font-medium pl-0.5'>Confirm your password:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9H6z"></path>
              </svg>
            </i>
            <input 
              type={showPassword ? "text" : "password"} 
              value={confirmPassword} 
              placeholder='Enter your password'
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className='w-full p-2 pr-10 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
            />
            <span 
              onClick={() => setShowPassword(!showPassword)} 
              className='absolute right-1 p-2 top-[1.2px] text-text/40 dark:text-darkText/40'
            >
              {showPassword ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12 5c-7.63 0-9.93 6.62-9.95 6.68-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68s9.93-6.62 9.95-6.68c.07-.21.07-.43 0-.63C21.93 11.61 19.63 5 12 5m0 12c-5.35 0-7.42-3.84-7.93-5 .5-1.16 2.58-5 7.93-5s7.42 3.85 7.93 5c-.5 1.16-2.58 5-7.93 5"></path><path d="M13.5 12c-.83 0-1.5-.67-1.5-1.5 0-.6.36-1.12.87-1.35-.28-.09-.56-.15-.87-.15-1.64 0-3 1.36-3 3s1.36 3 3 3 3-1.36 3-3c0-.3-.06-.59-.15-.87-.24.51-.75.87-1.35.87"></path>
                </svg>
              :
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12 17c-5.35 0-7.42-3.84-7.93-5 .2-.46.65-1.34 1.45-2.23l-1.4-1.4c-1.49 1.65-2.06 3.28-2.08 3.31-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68.91 0 1.73-.1 2.49-.26l-1.77-1.77c-.24.02-.47.03-.72.03ZM21.95 12.32c.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68-1.84 0-3.36.39-4.61.97L2.71 1.29 1.3 2.7l4.32 4.32 1.42 1.42 2.27 2.27 3.98 3.98 1.8 1.8 1.53 1.53 4.68 4.68 1.41-1.41-4.32-4.32c2.61-1.95 3.55-4.61 3.56-4.65m-7.25.97c.19-.39.3-.83.3-1.29 0-1.64-1.36-3-3-3-.46 0-.89.11-1.29.3l-1.8-1.8c.88-.31 1.9-.5 3.08-.5 5.35 0 7.42 3.85 7.93 5-.3.69-1.18 2.33-2.96 3.55z"></path>
                </svg>
              }
            </span>
          </div>
        </div>

        {/* contact number */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="emailField" className='text-sm font-medium pl-0.5'>Contact number:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.455 1.455 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
              </svg>
            </i>
            <input 
              type="text" 
              placeholder='Enter your contact number'
              value={contactNumber} 
              onChange={(e) => setContactNumber(e.target.value = e.target.value.replace(/\D/g, ''))} 
              className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
            />
          </div>
        </div>

        {/* submit and sign in button */}
        <div className='w-full h-fit flex-col flex gap-5'>
          <button 
            className='font-medium p-2 w-full text-darkText bg-primary dark:bg-darkPrimary mt-8 rounded-md'
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/Login")}
            className='text-ssm pl-0.5 text-text/50 dark:text-darkText/50 font-medium w-full'
          >
            Already have an account? Sign in
          </button>
        </div>

      </form>

    </div>
  )
}

export default SignUp