import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar  from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>

    </div>
    </BrowserRouter>
  );
}

export default App;
