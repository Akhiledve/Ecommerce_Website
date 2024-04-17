import React from 'react';
import { watchData } from '../data/watch';
import Navbar from '../components/Navbar';

import { Link } from 'react-router-dom';

const WatchPages = () => {

    
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {watchData.map((item)=>{
        return (
        <div>
          <Link to = {`/watch/${item.id}`}>
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

export default WatchPages
