import React from 'react';
import { furnitureData } from '../data/furniture';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const FurniturePages = () => {
    
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {furnitureData.map((item)=>{
        return (
        <div>
          <Link to = {`/furniture/${item.id}`}>
            <div >
                <img className='pageImage' src = {item.image} alt = '' />     
            </div>
          </Link>
            <div className='pageModel'>
                {item.type}, {item.model}
            </div>
        </div>
        )
      })}
    </div>
    </>
  )
}

export default FurniturePages
