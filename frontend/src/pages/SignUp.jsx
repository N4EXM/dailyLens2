import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [username, setUserame] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleRegisterSubmit = async (e) => {

    e.preventDefault()
    
    setIsLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Password does not match")
      return;
    }

    if (password.length < 8) {
      setError("Password needs to be 8 characters or more")
      return;
    }

    try {

      const response = await fetch("http://localhost:3000/api/routes/userApi.php?action=register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username, 
          firstName,
          lastName,
          email,
          password
        })
      })

      const data = await response.json()
      console.log("registration response", data);

      if (!response.ok) {
        throw new Error(data.message || "Registration failed")
      }

      if (data.success) {
        console.log("yay")
      }

      else {
        setError(data.message || 'Registration failed');
      }

    }
    catch (error) {
      console.error('Registration error:', error);
      setError(error.message || 'Failed to complete registration');
    } 
    finally {
      setIsLoading(false);
    }

  }

  // useEffect(() => {
  //   console.log(password)
  //   console.log(confirmPassword)
  // }, [confirmPassword, password])

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
        onSubmit={(e) => handleRegisterSubmit(e)}
      >

        {/* username */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="usernameField" className='text-sm font-medium pl-0.5'>Username:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M12 6c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4m0 6c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2"></path><path d="M12 2C6.49 2 2 6.49 2 12c0 3.26 1.58 6.16 4 7.98V20h.03c1.67 1.25 3.73 2 5.97 2s4.31-.75 5.97-2H18v-.02c2.42-1.83 4-4.72 4-7.98 0-5.51-4.49-10-10-10M8.18 19.02C8.59 17.85 9.69 17 11 17h2c1.31 0 2.42.85 2.82 2.02-1.14.62-2.44.98-3.82.98s-2.69-.35-3.82-.98m9.3-1.21c-.81-1.66-2.51-2.82-4.48-2.82h-2c-1.97 0-3.66 1.16-4.48 2.82A7.96 7.96 0 0 1 4 11.99c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.97 4.36-2.52 5.82"></path>
              </svg>
            </i>
            <input 
              type="text" 
              placeholder='Enter your username'
              value={username} 
              onChange={(e) => setUserame(e.target.value)} 
              className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
            />
          </div>
        </div>

        {/* first name */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="firstNameField" className='text-sm font-medium pl-0.5'>First Name:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/></svg>
            </i>
            <input 
              type="text" 
              placeholder='Enter your first name'
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
            />
          </div>
        </div>

        {/* last name */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="lastNameField" className='text-sm font-medium pl-0.5'>Last Name:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/></svg>
            </i>
            <input 
              type="text" 
              placeholder='Enter your last name'
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
            />
          </div>
        </div>

        {/* email field */}
        <div className='flex flex-col w-full h-fit gap-2'>
          <label htmlFor="emailField" className='text-sm font-medium pl-0.5'>Email:</label>
          <div className='relative w-full h-fit'>
            <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
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
          <label htmlFor="confirmPasswordField" className='text-sm font-medium pl-0.5'>Confirm your password:</label>
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

        {/* submit and sign in button */}
        <div className='w-full h-fit flex-col flex gap-5'>

          {error !== "" &&
            <p
              className='text-center font-medium dark:text-rose-400 text-rose-500 text-sm'
            >
              {error}
            </p>
          }

          <button 
            className='font-medium p-2 w-full text-darkText bg-primary dark:bg-darkPrimary mt-2 rounded-md'
          >
            {isLoading 
              ? "Processing..."
              : "Submit"
            }
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