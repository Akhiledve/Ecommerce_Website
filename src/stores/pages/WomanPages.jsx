import React from 'react';
import { womanData } from '../data/woman';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const WomanPages = () => {
    
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {womanData.map((item)=>{
        return (
        <div>
          <Link to = {`/woman/${item.id}`}>
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

export default WomanPages
