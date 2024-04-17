import React from 'react';
import { fridgeData } from '../data/fridge';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const FridgePages = () => {
    
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {fridgeData.map((item)=>{
        return (
        <div>
          <Link to = {`/fridge/${item.id}`}>
            <div >
                <img className='pageImage' src = {item.image} alt = '' />     
            </div>
            </Link>
            <div className='pageModel'>
                {item.company}, {item.model}
            </div>
        </div>
        )
      })}
    </div>
    </>
  )
}

export default FridgePages
