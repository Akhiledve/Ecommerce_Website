import React from 'react';
import { acData } from '../data/ac';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';



const AcPages = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {acData.map((item)=>{
            return(
                <div >
                    <Link to = {`/ac/${item.id}`}>
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

export default AcPages
