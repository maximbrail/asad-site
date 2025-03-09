import "./index.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'


import { Home } from "./Page/Home";
import { About } from "./Page/About";
import { Contacts } from "./Page/Contacts";
import { Service } from "./Page/Service";



import { NavCom } from './Components/NavCom'


function App() {
  return (
    <Router className='App'>
      
      <NavCom/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>

    </Router>
  );
}

export default App;
