import './Navbar.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
//import {FaBars , FaTimes} from 'react-icons/fa'

export default function Navbar() {

 return (

<div class="navbar">
<a href="#" class="navbar-head"><img  src={require("./petlogo.png")} height="50" width="50"  alt=""></img>DAVIDPETS</a>
<div class="navbar-item">

<ul>
<li><Link to="/">HOME</Link></li>
<li><Link to="./about">ABOUT</Link></li>
<li><Link to="./contact">CONTACT</Link></li>
<li><Link to="/services">SERVICES</Link></li>
<li><Link to="./singnup">SINGNUP</Link></li>
</ul>
</div>
</div>







  )
}
