import React from 'react'

const CategoryButton = ({name, icon, handleCategory, currentCategory}) => {
  return (
    <button className={`border border-secondary/20 dark:border-darkSecondary/20 ${currentCategory === name ? "bg-primary dark:bg-darkPrimary" : "bg-secBackground dark:bg-secDarkBackground"} duration-100 text-text/80 font-medium rounded-sm px-2 flex flex-row items-center justify-start gap-2 p-1 text-xs`} onClick={handleCategory}>
      <i className={`${currentCategory === name ? "text-background " : "text-text dark:text-darkText"}`}>{icon}</i>
      <p className={`${currentCategory === name ? "text-background " : "text-text dark:text-darkText"}`}>{name}</p>
    </button>
  )
}

export default CategoryButton