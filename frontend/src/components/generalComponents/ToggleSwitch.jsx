import { useState } from 'react';

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-20 ">
      <label className="group relative inline-flex cursor-pointer flex-col items-center">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
        />
        <div className={`
          relative h-6 w-12 rounded-full 
          ${isActive ? 'bg-primary dark:bg-darkPrimary' : 'bg-darkBackground/20 dark:bg-background/20'}
          shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] 
          transition-all duration-300 
          after:absolute after:left-0.5 after:top-0.5 
          after:h-5 after:w-5 after:rounded-full 
          after:bg-white after:shadow-[1px_1px_4px_rgba(0,0,0,0.2)] 
          after:transition-all after:duration-300 
          ${isActive ? 'after:translate-x-6' : ''}
          hover:after:scale-95 active:after:scale-90
        `}>
          <span className={`
            absolute inset-0 rounded-full 
            opacity-0 transition-opacity duration-300 
            ${isActive ? 'animate-glow opacity-100' : ''}
            
          `} />
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;