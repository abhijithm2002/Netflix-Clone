import React from 'react';
import './App.css';
import { originals,action,comedy,horror,romance,documentary } from './urls';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPost url = {originals} title='Netflix Originals'/>
     <RowPost url = {action} title='Action' isSmall />
     <RowPost url = {comedy} title='Comedy' isSmall />
     <RowPost url = {horror} title='Horror' isSmall />
     <RowPost url = {romance} title='Romance' isSmall />
     <RowPost url = {documentary} title='Documentary' isSmall />
    </div>
  );
}

export default App;
