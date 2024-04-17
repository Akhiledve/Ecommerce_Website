import React from 'react';
import { kitchenData } from '../data/kitchen';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const KitchenPages = () => {
    
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
      {kitchenData.map((item)=>{
        return (
        <div>
          <Link to = {`/kitchen/${item.id}`}>
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

export default KitchenPages
