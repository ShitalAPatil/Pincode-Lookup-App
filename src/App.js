import React from 'react';
import PincodeLookup from './components/PincodeLookup';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import './App.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <PincodeLookup />
      <Filter />
    </div>
  );
};

export default App;
