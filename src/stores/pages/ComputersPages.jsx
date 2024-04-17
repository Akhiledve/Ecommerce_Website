import React from 'react';
import { computerData } from '../data/computers';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const ComputersPages = () => {
    
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {computerData.map((item)=>{
        return (
        <div>
          <Link to = {`/computers/${item.id}`}>
            <div>
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

export default ComputersPages
