import React from 'react';
import './App.css';
import LandingPages from './stores/pages/LandingPages';
import {Routes,Route} from 'react-router-dom';

import MobilePage from './stores/pages/MobilePage';
import AcPages from './stores/pages/AcPages';

import BooksPages from './stores/pages/BooksPages';
import KitchenPages from './stores/pages/KitchenPages';
import FridgePages from './stores/pages/FridgePages';
import FurniturePages from './stores/pages/FurniturePages';
import MenPages from './stores/pages/MenPages';
import WomanPages from './stores/pages/WomanPages';
import WatchPages from './stores/pages/WatchPages';
import ComputersPages from './stores/pages/ComputersPages';
import MobileSingle from './singles copy/MobileSingle';
import AcSingle from './singles copy/AcSingle';
import BookSingle from './singles copy/BookSingle';
import ComputerSingle from './singles copy/ComputerSingle';
import FridgeSingle from './singles copy/FridgeSingle';
import FurnitureSingle from './singles copy/FurnitureSingle';
import KitchenSingle from './singles copy/KitchenSingle';
import MenSingle from './singles copy/MenSingle';
import WomanSingle from './singles copy/WomanSingle';
import WatchSingle from './singles copy/WatchSingle';




const App = () => {
  return (
    <div>
      <Routes>

        <Route path = '/' element = {<LandingPages/>} />
        <Route path = '/furniture' element = {<FurniturePages/>} />
        <Route path = '/mobiles' element = {<MobilePage/>} />
        <Route path = '/ac' element = {<AcPages/>} />
        <Route path = '/kitchen' element = {<KitchenPages/>} />
        <Route path = '/book' element = {<BooksPages/>} />
        <Route path = '/fridge' element = {<FridgePages/>} />
        <Route path = '/men' element = {<MenPages/>} />
        <Route path = '/woman' element = {<WomanPages/>} />
        <Route path = '/watch' element = {<WatchPages/>} />
        <Route path = '/computers' element = {<ComputersPages/>} />


        <Route path = '/mobiles/:id' element = {<MobileSingle/>} />
        <Route path = '/ac/:id' element = {<AcSingle/>} />
        <Route path = '/book/:id' element = {<BookSingle/>} />
        <Route path = '/computers/:id' element = {<ComputerSingle/>} />
        <Route path = '/fridge/:id' element = {<FridgeSingle/>} />
        <Route path = '/furniture/:id' element = {<FurnitureSingle/>} />
        <Route path = '/kitchen/:id' element = {<KitchenSingle/>} />
        <Route path = '/men/:id' element = {<MenSingle/>} />
        <Route path = '/woman/:id' element = {<WomanSingle/>} />
        <Route path = '/watch/:id' element = {<WatchSingle/>} />



      </Routes>
    </div>
  )
}

export default App 


