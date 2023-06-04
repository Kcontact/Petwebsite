//import logo from './logo.svg';

import {useState} from 'react'
import Home from './Pages//Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Singnup from './Pages/Singnup'
import Notfound from './Pages/Notfound'
import Navbar from  './Components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {

  return (

    <>

<BrowserRouter>
<Navbar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/singnup' element={<Singnup/>} />
      <Route path='/notfound' element={<Notfound/>} /> 
         </Routes>
         </BrowserRouter>
   </>
  );
}

export default App;
