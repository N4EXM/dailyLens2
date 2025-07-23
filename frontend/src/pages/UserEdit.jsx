import React, { useState, useRef  } from 'react'
import { useNavigate } from 'react-router-dom'

const UserEdit = () => {
  
  const userDetails = {
    image: null,
    name: "John Doe",
    email: "JohnDoe23@gmail.com",
    contactNumber: "02234234567",
    password: "password1234"
  }

  const [warningBox, setWarningBox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null) // 
  const [preview, setPreview] = useState(userDetails.image || null) // preview the current image
  const fileInputRef = useRef(null); // Ref to access the file input
  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState(userDetails.email)
  const [name, setName] = useState(userDetails.name)
  const [contactNumber, setContactNumber] = useState(userDetails.contactNumber)
  const [password, setPassword] = useState(userDetails.password)


  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      // Generate preview URL
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className='w-full h-full p-5 flex flex-col gap-5 pb-24 z-10 relative'>

        {/* go back button */}
        <button 
          onClick={() => setWarningBox(true)} 
          className='p-2 rounded-full w-fit bg-secBackground dark:bg-secDarkBackground'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
            </svg>
        </button>

        {/* warning box */}
        <div className={`${warningBox ? "flex" : "hidden"} border border-text/20 dark:border-darkText/20 fixed w-4/5 h-36 z-40 bg-background flex-col rounded-sm dark:bg-darkBackground flex justify-between left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                
                <div className='w-full h-fit gap-1 flex p-4 flex-col'>
                    <h1 className='text-sm font-medium h-fit'>Are you sure you want to exit</h1>
                    <p className='w-full h-fit text-xs opacity-60'>All your data will be lost</p>
                </div>
                
                <div className='w-full h-full flex items-end p-2 flex-row gap-2'>
                    <button onClick={() => setWarningBox(false)} className='w-full p-2 bg-secBackground font-medium dark:bg-secBackground/5 h-fit border border-text/20 dark:border-darkText/20 text-sm rounded-sm'>
                        Cancel
                    </button>
                    <button onClick={() => handleNavigate()} className='bg-rose-600 border border-rose-600 w-full h-fit text-darkText font-medium rounded-sm p-2 text-sm'> 
                        Exit
                    </button>
                </div>

        </div>

        {/* user image */}
        <div className='w-full h-fit flex items-center justify-center relative'>

          <input 
            required
            type="file"
            accept='images/*'
            onChange={handleImageChange}
            className='hidden w-full h-full '
            id='image-upload'
            ref={fileInputRef}
          />
          <label htmlFor="image-upload" className='absolute right-[30%] bottom-0 dark:bg-secDarkBackground bg-secBackground p-2 rounded-full border border-text/20 dark:border-darkText/20 flex'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path class="b" d="m12,9c-2.17,0-4,1.83-4,4s1.83,4,4,4,4-1.83,4-4-1.83-4-4-4Zm0,6c-1.07,0-2-.93-2-2s.93-2,2-2,2,.93,2,2-.93,2-2,2Z"></path><path class="b" d="m20,5h-3.15l-2.23-1.78c-.18-.14-.4-.22-.62-.22h-4c-.23,0-.45.08-.62.22l-2.23,1.78h-3.15c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2Zm0,14H4V7h3.5c.23,0,.45-.08.62-.22l2.23-1.78h3.3l2.23,1.78c.18.14.4.22.62.22h3.5s0,12,0,12Z"></path><path class="b" d="M18 8A1 1 0 1 0 18 10 1 1 0 1 0 18 8z"></path>
            </svg>
          </label>

          <div className={`w-32 h-32 object-center ${userDetails.image === null ? "" : "p-1"} rounded-full bg-background dark:bg-darkBackground border-2 border-text/20 dark:border-darkText/20`}>
              {preview === null ? 
                  <i className='w-full h-full flex items-center justify-center text-text dark:text-darkText'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"  
                      fill="currentColor" viewBox="0 0 24 24" >
                      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1"></path>
                    </svg>
                  </i>
                  
                : 

                <div className='w-full h-full aspect-3/2 rounded-full'>
                    <img src={preview} alt="" className='rounded-full w-full h-full object-cover'/>
                </div>

              }
            </div>

        </div>

        {/* input boxes */}
        <div className='flex flex-col items-start justify-start gap-3 pt-4'>

          {/* Name field */}
          <div className='flex flex-col w-full h-fit gap-2'>
            <label htmlFor="nameField" className='text-sm font-medium'>Name:</label>
            <div className='relative w-full h-fit'>
              <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                </svg>
              </i>
              <input 
                value={name} 
                onChange={(e) => setEmail(e.target.value)} 
                type="text" 
                className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
              />
            </div>
          </div>
            
          {/* email field */}
          <div className='flex flex-col w-full h-fit gap-2'>
            <label htmlFor="emailField" className='text-sm font-medium'>Email:</label>
            <div className='relative w-full h-fit'>
              <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="m20,4H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2Zm-8.61,10.79c.18.14.4.21.61.21s.43-.07.61-.21l1.55-1.21,4.42,4.42H5.41l4.42-4.42,1.55,1.21Zm8.61-8.79v.51s-8,6.22-8,6.22L4,6.51v-.51h16Zm0,3.04v7.54s-4.24-4.24-4.24-4.24l4.24-3.3Zm-11.76,3.3l-4.24,4.24v-7.54l4.24,3.3Zm11.76,5.66h0s0,0,0,0h0Z"></path>
                </svg>
              </i>
              <input 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
              />
            </div>
          </div>

          {/* contact number field */}
          <div className='flex flex-col w-full h-fit gap-2'>
            <label htmlFor="contactField" className='text-sm font-medium'>Contact Number:</label>
            <div className='relative w-full h-fit'>
              <i className='absolute top-[9px] left-2.5 text-primary dark:text-darkPrimary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                  fill="currentColor" viewBox="0 0 24 24" >
                  <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.455 1.455 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
                </svg>
              </i>
              <input 
                type="text" 
                value={contactNumber} 
                onChange={(e) => setContactNumber(e.target.value)} 
                className='w-full p-2 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
              />
            </div>
          </div>

          {/* password field */}
          <div className='flex flex-col w-full h-fit gap-2'>
            <label htmlFor="passwordField" className='text-sm font-medium'>password:</label>
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
                onChange={(e) => setPassword(e.target.value)} 
                className='w-full p-2 pr-10 rounded-md border text-sm border-text/20 dark:border-darkText/20 bg-secBackground dark:bg-secDarkBackground pl-10 outline-none'
              />
              <button 
                onClick={() => setShowPassword(!showPassword)} 
                className='absolute right-1 p-2 top-[1.2px] text-primary dark:text-darkPrimary'
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
              </button>
            </div>
          </div>
          <button 
            className='font-medium p-2 w-full text-darkText bg-primary dark:bg-darkPrimary mt-4 rounded-md'
          >
            Save
          </button>
        </div>

    </div>
  )
}

export default UserEdit