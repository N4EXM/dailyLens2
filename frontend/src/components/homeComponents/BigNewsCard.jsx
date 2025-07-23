import React from 'react'
import { useNavigate } from 'react-router-dom'

const BigNewsCard = ({articleImage, title, authorImage, authorName, date, content, id}) => {

  const navigate = useNavigate()

  const handleCardNavigate = () => {

    navigate(`Article/${id}`, {
      state: {
        articleImage: articleImage,
        title: title,
        authorImage: authorImage,
        authorName: authorName,
        date: date,
        content: content,
        id: id
      }
    })

  }

  return (
    <div className='relative text-background overflow-y-clip' onClick={() => handleCardNavigate()}>

      <div className='relative aspect-3/2 w-full h-44'>
        <img 
          src={articleImage} 
          className='rounded-xl w-full h-full object-cover' 
          alt="Article cover"
        />
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl'></div>
      </div>

      <div className='absolute bottom-0.5 flex flex-col gap-2 p-3 pr-4 text-background '>
        <p className='font-semibold font-poppins text-ssm'>{title}</p>
        <div className='w-full h-fit flex flex-row items-center justify-between'>

          <div className='w-fit flex flex-row items-center gap-2'>
            <img className='size-5 rounded-full' src={authorImage} alt="" />
            <p className='text-xxs font-light'>{authorName}</p>
          </div>

          <p className='font-light text-xxs'>{date}</p>

        </div>
      </div>
    </div>
  )
}

export default BigNewsCard