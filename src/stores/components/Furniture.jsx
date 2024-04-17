import React from 'react';
import { furnitureData } from '../data/furniture';


const Furniture = () => {
    const FirstFiveItems = furnitureData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
        <h2>Furniture</h2>
    </div>

    <div className='proSection'>
      
      {FirstFiveItems.map((item)=> {
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

export default Furniture
