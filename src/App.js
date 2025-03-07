import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'

import { NavCom } from './Components/NavCom';
import { HeaderCom } from './Components/HeaderCom';
import { MainCom } from './Components/MainCom';
import FooterCom from './Components/FooterCom';



function App() {
  return (
    <Router className="App">
      <NavCom />
      <HeaderCom />
      <MainCom />
      <FooterCom />
    </Router>


  );
}

export default App;
