import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ConfirmPassword= () => {

  const { user, setAuthenticatedPassword, isLoading, setIsLoading } = useAuth()

  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  // sends the data to backend to confirm the users details again
  const handleFormSubmit = async (e) => {

    e.preventDefault()

    setIsLoading(true)

    if (email === "" || password === "") {
      setError("email or password is empty")
      return;
    }

    try {
      
      const response = await fetch('http://localhost:3000/api/routes/userApi.php?action=confirmUser', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      
      if (!response.ok) {
        setError(data.message)
      }

      const data = await response.json()

      if (data.success) {
        setAuthenticatedPassword(data.password)
        navigate("/UserEdit")
      }
      else {
        setError(data.message)
      }

      setIsLoading(false)
      
    }
    catch {
      setIsLoading(false)
      setError("failed to send details, try again")
    }
  }

  return (
    <div 
      className='w-full h-full p-5 flex flex-col gap-6 z-10 relative pt-24'
    >
      


      <div 
        className='text-darkText w-full flex flex-col gap-2 h-fit'
      >
        <h1 
          className='text-3xl font-bold'
        >
          Confirm your identity
        </h1>
        <p 
          className='text-ssm font-medium pr-4 mmo:pr-8'
        >
          Enter your password to change your accounts details.
        </p>
      </div>

      <form
        className='flex flex-col gap-5 pt-2'
        onSubmit={(e) => handleFormSubmit(e)}
      >
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

        <div className='flex flex-col gap-2 w-full h-fit'>
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
          <button
            className='text-ssm pl-0.5 text-text/50 dark:text-darkText/50 font-medium w-full flex justify-end'
          >
            Forgot your password?
          </button>
        </div>
        
        <p
          className='text-center font-medium text-sm text-rose-400 dark:text-rose-500'
        >
          {error}
        </p>

        <div className='w-full h-fit flex-col flex gap-5'>
          <button 
            className='font-medium p-2 w-full text-darkText bg-primary dark:bg-darkPrimary mt-4 rounded-md'
          >
            {isLoading
              ? "Processing..."
              : "Sign in"
            }
          </button>
          <button
            onClick={() => navigate("/SignUp")}
            className='text-ssm pl-0.5 text-text/50 dark:text-darkText/50 font-medium w-full'
          >
            Don't have an account? Sign Up
          </button>
        </div>

      </form>

    </div>
  )
}

export default ConfirmPassword