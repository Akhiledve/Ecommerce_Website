import React from 'react'
import { menData } from '../data/men'

const Men = () => {
    const FirstFiveItems = menData.slice(0,5);
  return (
    <>
          <div className='proTitle'>
              <h2>Men Ware</h2>
          </div>
    <div className='proSection'>
      {FirstFiveItems.map((item)=> {
        return (
          
            <div className='imgBox'>
                <img className='proImage' src = {item.image}/>
            </div>
        )
      })}

    </div>
    </>
  )
}

export default Men
