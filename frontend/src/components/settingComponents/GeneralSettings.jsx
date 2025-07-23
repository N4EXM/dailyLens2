import React, {useState} from 'react'
import ToggleSwitch from '../generalComponents/ToggleSwitch'

const GeneralSettings = () => {

    const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`p-3 bg-secBackground dark:bg-secDarkBackground rounded-md border border-text/20 dark:border-darkText/20 duration-300 flex flex-col gap-5 ${isExpanded ? "h-60" : "h-14 overflow-y-hidden"}`}>
        
        <div onClick={() => setIsExpanded(!isExpanded)} className='w-full h-fit flex flex-row items-center justify-between p-1'>
            <h1 className='text-sm font-semibold'>General Settings</h1>
            <svg className={`${isExpanded ? "rotate-180" : ""} duration-200`} xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
            </svg>
        </div>

        <div className={`w-full h-fit ${isExpanded ? "opacity-100" : "opacity-0"} duration-300`}>
            
            <div className='w-full h-full flex items-center justify-between px-1'>
                <p className='text-sm font-medium'>Dark mode</p>
                <ToggleSwitch></ToggleSwitch>
            </div>

        </div>

    </div>
  )
}

export default GeneralSettings