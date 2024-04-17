import React from 'react';
import {fridgeData} from '../data/fridge';

const Fridge = () => {
    const FirstFiveItems = fridgeData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
        <h2>Fridge</h2>
    </div>
    <div className='proSection'>
      {FirstFiveItems.map((item)=> {
        return (
        <div className='imgBox'> 
            <img className='proimage' src = {item.image} alt = '' />
        </div>
        )
      })}
    </div>
    </>
  )
}

export default Fridge
