import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
    
   const  FirstFiveItems = booksData.slice(0,5);
  return (
    <>
    <div className='proTitle'>
        <h2>Books</h2>
    </div>
    <div className='proSection'>
        {FirstFiveItems.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className='proImage' src = {item.image}/>
                </div>
            )
        })}
       
    </div>
    </>
  )
}

export default Books 
