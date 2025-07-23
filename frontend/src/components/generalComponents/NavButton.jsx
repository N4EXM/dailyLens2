import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavButton = ({icon, link, handleNavigate, name}) => {

  return (
    <button className={`font-medium p-2 flex items-center justify-start gap-3 flex-row dark:bg-darkBackground/50 bg-background/50 rounded-md`} onClick={handleNavigate}>
      <i className={`${location.pathname == link ? "text-primary dark:text-darkPrimary":"text-text dark:text-darkText"}`}>{icon}</i>
      <p className='text-sm'>{name}</p>
    </button>
  )
}

export default NavButton