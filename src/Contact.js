import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
//import './Contact.css'


export default function Contact() {


  return (


<div className="container">

<div className="contact">
       <div className="contact-info">
        <h1>I'm here to help you in any way that I can</h1>
        <h3>I'm currently available for freelance work</h3>
        <p>If you have a project that you want to get started with, think you need my help with something,<br/> or just want to say hello, then feel free to get in touch</p>
        <button><i className="lni lni-whatsapp"></i>Catact Me</button>
       </div>

       <div class="footer">
         
         <a href="#">FaceBook</a>
         <a href="#">Instagram</a>
         <a href="#">Github</a>
         <a href="#">hire me </a>
     
     <p>@ 2023 KARTHIK KUMAR.WEB. All rights reserved.</p>
 </div>


       </div>







    </div>



    )
}
