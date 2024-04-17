import React from 'react';
import { booksData } from '../data/books';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const BooksPages = () => {
    
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {booksData.map((item)=>{
        return (
        <div>
           <Link to = {`/book/${item.id}`}>
            <div >
                <img className='pageImage' src = {item.image} alt = 'Image Not Found' />     
            </div>
          </Link>
            <div className='pageModel'>
                {item.company} {item.model}
            </div>
        </div>
        )
      })}
    </div>
    </>
  )
}

export default BooksPages
