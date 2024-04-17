import React from 'react'
import { womanData } from '../data/woman'

const Women = () => {
    const FirstFiveImages = womanData.slice(0,5);
  return (
    <>
          <div className='proTitle'>
              <h2>Women Ware</h2>
          </div>
    <div className='proSection'>
      {FirstFiveImages.map((item)=>{
        return(
            <div className='imgBox'>
                <img className='proImage' src = {item.image} />
            </div>
        )
      })}
    </div>
    </>
  )
  
}

export default Women
