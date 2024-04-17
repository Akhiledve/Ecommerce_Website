import React from 'react';
import { kitchenData } from '../data/kitchen';

const Kitchen = () => {
    const FirstFiveItems = kitchenData.slice(0,5)

  return (
    <>
    <div className='proTitle'>
        <h2>Kitchen</h2>
    </div>
    <div className='proSection'>
      {FirstFiveItems.map((item) => {
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

export default Kitchen
