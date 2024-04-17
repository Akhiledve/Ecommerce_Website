import React from 'react';
import Mobiles from '../components/Mobiles';
import Computers from '../components/Computers';
import Ac from '../components/Ac';
import Books from '../components/Books';
import Watch from '../components/Watch';
import Fridge from '../components/Fridge';
import Women from '../components/Women';
import Men from '../components/Men';
import Kitchen from '../components/Kitchen';
import Furniture from '../components/Furniture';



const Products = () => {
  return (
    <div>
      <Mobiles/>
      <Computers />
      <Ac/>
      <Books/>
      <Watch/>
      <Fridge/>
      <Women/>
      <Men/>
      <Kitchen/>
      <Furniture/>
    </div>
  )
}

export default Products 
