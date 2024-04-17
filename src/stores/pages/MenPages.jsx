import React from 'react';
import { menData } from '../data/men';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MenPages = () => {
  
    
  return (
    <>
    <Navbar/>
    
      
    <div className='pageSection'>
      {menData.map((item)=>{
        return (
        <div>
          <Link to = {`/men/${item.id}`}>
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

export default MenPages
