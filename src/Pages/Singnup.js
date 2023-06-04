import React from 'react'
import { Link } from "react-router-dom";
import './Singnup.css'
import animated5 from  "./image/animated5.mp4";

export default function Singnup() {



    return (

      <>

    <div className="Singnup">
  
    <div className="singup-cards-one">
    <h1>We hope you find our pet website a valuable resource for all your pet-related needs</h1>
    <img  src="https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_640.jpg"></img>     
      <p>Remember, pets bring joy and companionship into our lives, and by providing them with proper care and love, we ensure they lead happy and fulfilling lives too!</p>
      </div> 

    <div className="singup-cards-two">
    <h1>We hope you find our pet website a valuable resource for all your pet-related needs</h1>
    <img width="500px" height="408px" src="https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_640.jpg"></img>     
      <p>Remember, pets bring joy and companionship into our lives, and by providing them with proper care and love, we ensure they lead happy and fulfilling lives too!</p>
      </div> 
    </div>

    <div className="Singnup-one">
    
    <h1>Ensuring the safety of your pet is of utmost importance. This section will cover topics like pet-proofing your home, creating a safe outdoor environment, and essential safety measures for travel. We'll also discuss pet identification methods, microchipping, and steps to take during emergencies.</h1>
   
    <img width="1200px" src="https://cdn.pixabay.com/photo/2019/02/02/17/12/animation-3970998_1280.png"></img>

    </div>

    <div className="Singnup-two">
    
    <h1>Thank you for visiting our website</h1>

  <video className="video4" autoPlay loop muted>
<source  src={animated5} type="video/mp4"/>
</video>

    </div>



    <div className="Singnup-thee">
    
    <h1>&copy; 2023 WebKart. All Rights Reserved.</h1>


    </div>



       </>
  );
}

