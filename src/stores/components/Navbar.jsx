import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <div>
            <h2>E-mart</h2>
        </div>

        <div >
            <input className='txtInput' type = 'text'  placeholder='Search...'/>
        </div>
        
        <div>
            Signin/Signup
        </div>
        <div>
            cart  
        </div>
        
      </div>
      <div className='subMenu'>
        <ul>
          <li className='navLink'><Link to = '/ac'>Ac</Link></li>
          
          <Link to = '/computers'><li className='navLink'>Computers</li></Link>
          <Link to = '/fridge'><li className='navLink'>Fridge</li></Link>
          <Link to = '/furniture'><li className='navLink'>Furniture</li></Link>
          <Link to = '/kitchen'><li className='navLink'>Kitchen</li></Link>
          <Link to = '/men'><li className='navLink'>Men Ware</li></Link>
          <Link to = '/woman'><li className='navLink'>Women Ware</li></Link>
          <Link to = '/watch'><li className='navLink'>Watch</li></Link>
          <Link to = '/mobiles'><li className='navLink'>Mobiles</li></Link>
        </ul>

      </div>
    </div>
  )
}

export default Navbar   
