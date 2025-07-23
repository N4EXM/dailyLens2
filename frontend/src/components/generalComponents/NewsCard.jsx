import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({articleImage, authorImage, title, authorName, date, category, content, id}) => {

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

    const truncateText = (str, maxLength) => {
        if (str.length > maxLength && window.innerWidth < 360) {
            return str.substring(0, maxLength) + '...';
        }
        else {
            return str
        }
    }



  return (
    <div 
        onClick={() => handleCardNavigate()}
        className='flex gap-2 w-full h-full min-h-[84px] rounded-lg'> 
        {/* Image container (fixed height) */}
        <div className='relative aspect-3/2 h-20 mmo:h-[84px] shrink-0'>
            <img src={articleImage} alt="" className='rounded-xl w-full h-full object-cover' />
        </div>

        {/* Text container (flexible height) */}
        <div className='flex flex-col justify-between h-full gap-2 min-h-full grow'>
            <div className='h-full'>
                <p className='text-[8px] font-light '>{category}</p>
                <p className='text-xs font-medium h-11'>{truncateText(title, 50)}</p>
            </div>
            
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-2'>
                    <img className='size-4 rounded-full' src={authorImage} alt="" />
                    <h4 className='text-[8px] font-medium'>{authorName}</h4>
                </div>
                <p className='text-[8px]'>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsCard