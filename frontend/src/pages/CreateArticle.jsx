import React, {useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAutoResizeTextarea } from '../hooks/useAutoResizeTextArea'

const CreateArticle = () => {

    const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate(-1)
    }

    const [title, setTitle] = useState("") // article title
    const [selectedCategory, setSelectedCategory] = useState("No selected category")
    const [content, setContent] = useState("")  // article content
    const [selectedImage, setSelectedImage] = useState(null) // 
    const [preview, setPreview] = useState(null) // preview the current image

    const [dropCategoryActive, setDropCategoryActive] = useState(false)
    const dropDownRef = useRef(null)
    const fileInputRef = useRef(null); // Ref to access the file input
    const [isWarningBoxActive, setIsWarningBoxActive] = useState(false)
    const textAreaRef = useAutoResizeTextarea(content) // textArea hook
    const categories = [
        {
            category: "Tech",
            icon: 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m21,4H3c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM3,18V6h18v12s-18,0-18,0Z"></path><path d="M5 8H7V10H5z"></path><path d="M8 8H10V10H8z"></path><path d="M11 8H13V10H11z"></path><path d="M14 8H16V10H14z"></path><path d="M17 8H19V10H17z"></path><path d="M5 11H7V13H5z"></path><path d="M8 11H10V13H8z"></path><path d="M8 14H16V16H8z"></path><path d="M11 11H13V13H11z"></path><path d="M14 11H16V13H14z"></path><path d="M17 11H19V13H17z"></path>
            </svg>
        },
        {
            category: "Finance",
            icon: 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M4 2H2v19c0 .55.45 1 1 1h19v-2H4z"></path><path d="M17 12h2v6h-2zM12 4h2v14h-2zM7 9h2v9H7z"></path>
            </svg>
        },
        {
            category: "Sports",
            icon: 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M20 18A2 2 0 1 0 20 22 2 2 0 1 0 20 18z"></path><path d="m19.08,15.08c3.4-3.4,3.89-8.45,1.09-11.25-2.8-2.8-7.85-2.31-11.25,1.09-2.72,2.72-3.57,6.48-2.38,9.31,0,.5-.1.99-.32,1.49-.31.56-.65,1.11-1,1.64l-2.9,2.9c-.29.29-.29.77,0,1.06l.35.35c.29.29.77.29,1.06,0l2.9-2.9c.53-.35,1.08-.69,1.64-1,.5-.22.98-.31,1.49-.32.83.35,1.75.53,2.69.53,2.27,0,4.71-.99,6.62-2.91Zm-6.72.92l.64-.64.54.54c-.4.07-.8.11-1.19.1Zm-4.26-5.54l.54.54-.64.64c0-.39.03-.79.1-1.19Zm6.9-5.1l1.65,1.65-1.65,1.65-1.65-1.65,1.65-1.65Zm-2,1.29l-1.37-1.37c.72-.49,1.49-.83,2.25-1.04l.77.77-1.65,1.65Zm6.9,2.9l-.54-.54.64-.64c0,.39-.03.79-.1,1.19Zm-6.9,5.1l-1.65-1.65,1.65-1.65,1.65,1.65-1.65,1.65Zm2-1.29l1.37,1.37c-.72.48-1.49.83-2.25,1.04l-.77-.77,1.65-1.65Zm-5.57,1.57l1.57-1.57,1.65,1.65-.95.95c-.86-.12-1.64-.46-2.27-1.02Zm-.35-.35c-.56-.63-.9-1.42-1.02-2.27l.95-.95,1.65,1.65-1.57,1.57Zm4.28-3.57l1.65-1.65,1.65,1.65-1.65,1.65-1.65-1.65Zm2-2l1.65-1.65,1.65,1.65-1.65,1.65-1.65-1.65Zm3.65.35l.77.77c-.21.76-.56,1.53-1.04,2.25l-1.37-1.37,1.65-1.65Zm0-.71l-1.65-1.65,1.57-1.57c.56.63.9,1.42,1.02,2.27l-.95.95Zm-2-2l-1.65-1.65.94-.94c.86.12,1.63.46,2.27,1.02l-1.56,1.56Zm-2.35,2.35l-1.65,1.65-1.65-1.65,1.65-1.65,1.65,1.65Zm-2,2l-1.65,1.65-1.65-1.65,1.65-1.65,1.65,1.65Zm-3.65-.35l-.77-.77c.21-.76.56-1.53,1.04-2.25l1.37,1.37-1.65,1.65Zm7.78,3.78l-1.43-1.43,1.65-1.65,1.43,1.43c-.23.3-.48.6-.76.88-.28.28-.58.53-.88.76Zm-1.24-10.43s.07,0,.1,0l-.64.64-.54-.54c.36-.07.73-.11,1.08-.11Zm-4.32,1.58l1.43,1.43-1.65,1.65-1.43-1.43c.23-.3.48-.6.76-.88s.58-.53.88-.76Z"></path>
            </svg>
        },
        {
            category: "Gaming",
            icon: 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M21 5H3c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h14c2.21 0 4-1.79 4-4V7c0-1.1-.9-2-2-2M5 17c-1.1 0-2-.9-2-2V7h4v10zm4 0V7h6v10zm12-2c0 1.1-.9 2-2 2h-2V7h4z"></path><path d="M19 8a1 1 0 1 0 0 2 1 1 0 1 0 0-2M5 8a1 1 0 1 0 0 2 1 1 0 1 0 0-2M4 11h2v2H4zM18 11h2v2h-2z"></path>
            </svg>
        },
    ]

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

    const handleRemoveImage = () => {
        setPreview(null); // Clear preview
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset file input
        }
    };

    const handleCategory = (category) => {
        setSelectedCategory(category)
        console.log(selectedCategory)
        setDropCategoryActive(false)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setDropCategoryActive(false)
            }
        };

        // Add event listener when dropdown is active
        if (dropCategoryActive) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup function
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropCategoryActive]);

  return (
    <div className='w-full h-full p-5 flex flex-col gap-5 z-10 relative'>
        
        {/* go back to previous page */}
        {isWarningBoxActive &&
        
            <div className='border border-text/20 dark:border-darkText/20 fixed w-4/5 h-36 z-40 bg-background flex-col rounded-sm dark:bg-darkBackground flex justify-between left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                
                <div className='w-full h-fit gap-1 flex p-4 flex-col'>
                    <h1 className='text-sm font-medium h-fit'>Are you sure you want to exit</h1>
                    <p className='w-full h-fit text-xs opacity-60'>All your data will be lost</p>
                </div>
                
                <div className='w-full h-full flex items-end p-2 flex-row gap-2'>
                    <button onClick={() => setIsWarningBoxActive(false)} className='w-full p-2 bg-secBackground font-medium dark:bg-secBackground/5 h-fit border border-text/20 dark:border-darkText/20 text-sm rounded-sm'>
                        Cancel
                    </button>
                    <button onClick={() => handleNavigate()} className='bg-rose-600 border border-rose-600 w-full h-fit text-darkText font-medium rounded-sm p-2 text-sm'> 
                        Exit
                    </button>
                </div>

            </div>
        }

        {/* toggle exit function */}
        <button onClick={() => setIsWarningBoxActive(true)} className='p-2 rounded-full w-fit bg-secBackground dark:bg-secDarkBackground'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
            </svg>
        </button>

        {preview != null ?
            <div className='w-full h-full relative'>
                <button onClick={() => handleRemoveImage()} className='p-2 absolute right-3 top-3 z-20 bg-darkBackground/80 w-fit rounded-full cursor-pointer'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                        fill="currentColor" viewBox="0 0 24 24"  
                        transform="scale(1,-1) rotate(45)">
                        <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
                    </svg>
                </button>
                <div className='w-full h-44 aspect-3/2'>
                    <img src={preview} alt="" className='rounded w-full h-full object-cover'/>
                </div>
            </div>   
        :
            <div className='w-full h-44 bg-secBackground dark:bg-secDarkBackground rounded flex items-center justify-center flex-col border-text/20 dark:border-darkText/20 border'>
                <input 
                    required
                    type="file"
                    accept='images/*'
                    onChange={handleImageChange}
                    className='hidden w-full h-full '
                    id='image-upload'
                    ref={fileInputRef}
                />
                <label className='text-text/60 cursor-pointer dark:text-darkText/60 w-full h-full flex items-center justify-center flex-col gap-1' htmlFor="image-upload">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"  
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M21 14V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9v-2H5v-1.59l3-3 1.29 1.29c.39.39 1.02.39 1.41 0l5.29-5.29 3 3V14h2Zm-4.29-5.71a.996.996 0 0 0-1.41 0l-5.29 5.29-1.29-1.29a.996.996 0 0 0-1.41 0l-2.29 2.29V5h14v5.59L16.73 8.3Z"></path><path d="M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M21 16h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
                    </svg>
                    <span className='text-xs'>Add image</span>
                </label>
            </div>
        }

        {/* category selection */}
        <div className='w-full h-fit flex flex-col gap-2 text-sm relative bg-secBackground dark:bg-secDarkBackground p-3 rounded-sm border border-text/20 dark:border-darkText/20'>
            
            <button onClick={() => setDropCategoryActive(!dropCategoryActive)} className='w-full h-fit flex flex-row items-center justify-between'>
                <h1 className='text-ssm'>{selectedCategory}</h1>
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                </svg>
            </button>

            <div ref={dropDownRef} className={`${dropCategoryActive ? "flex" : "hidden"} dark:bg-secDarkBackground -bottom-44 left-0 w-full h-fit rounded-sm border border-text/20 dark:border-darkText/20 bg-secBackground absolute flex flex-col divide-y-1 divide-text/20 dark:divide-darkText/20`}>
                {categories.map((category) => (
                    <button onClick={() => handleCategory(category.category)} key={category.category} className='active:bg-primary/10 flex p-3 px-4 flex-row items-center gap-4 '>
                        <i className='text-primary dark:text-darkPrimary'>{category.icon}</i>
                        <p className='text-ssm'>{category.category}</p>
                    </button>
                ))}
            </div>

        </div>
        

        {/* title field */}
        <div className='w-full h-full flex flex-col gap-1'>
            <label 
                htmlFor="TitleField"
                className=' text-sm'
            >
                Title
            </label>
            <textarea
                required
                type="text" 
                id='TitleField'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                maxLength={128}
                className='w-full font-medium text-sm outline-primary dark:outline-darkPrimary border-text/20 dark:border-darkText/20 border p-2 rounded bg-secBackground dark:bg-secDarkBackground resize-none h-24'  
            />
        </div>

        {/* content field */}
        <div className='w-full h-full flex flex-col gap-1'>
            <label 
                htmlFor="contentField"
                className='text-sm'
            >
                Content
            </label>
            <textarea
                required
                type="text" 
                id='contentField'
                onChange={(e) => setContent(e.target.value)}
                ref={textAreaRef}
                className='w-full min-h-52 h-full text-xs outline-primary dark:outline-darkPrimary  border-text/20 dark:border-darkText/20 border p-2 rounded bg-secBackground dark:bg-secDarkBackground resize-none '  
            />
        </div>

        {/* submit article */}
        <div className='w-full h-full flex justify-end items-center'>
            <button onClick={() => {}} className='w-fit h-fit p-2 px-5 bg-primary dark:bg-darkPrimary text-darkText text-sm font-semibold rounded-md'>
                Publish
            </button>
        </div>

    </div>
  )
}

export default CreateArticle