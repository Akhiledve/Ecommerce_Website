import React from 'react';
import { watchData } from '../stores/data/watch';
import { useParams } from 'react-router-dom';


const WatchSingle = () => {
    const {id} = useParams()

    const product = watchData.find((item)=> item.id === id)
    console.log(id)
  return (
   <>
   
     <div className='indSection'>
          <div >
            <img className='indImage' src = {product.image} alt='' />
          </div>
          <div>
          <div>
              <h2>{product.company} </h2>
          </div>
          <div>
            <h2>{product.model}</h2>
          </div>
          <div>
              <h2>{product.price} </h2>
          </div>
          <div>
            <h2>{product.category}</h2>
          </div>
          <div>
              <h2>{product.description}</h2>
          </div>
          <div className= 'm-4'>
              <button className=' btn btn-primary text-white'>Add to Cart</button>
          </div>
          </div>
       
      </div>
    
    
   </>
    

  );
}

export default WatchSingle;

