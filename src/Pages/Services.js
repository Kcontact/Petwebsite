import React from 'react'
import { Link } from "react-router-dom";
import './Services.css'
import Animated from './image/Animated.webm'
import Animatedtwo from './image/Animatedtwo.webm'




export default function Services() {


    return (

<>

<div className="Service-container">
<h1 className="service-title">Pet websites often offer articles, guides, and resources on various aspects of pet care. This can include topics like pet nutrition, grooming, training, health and wellness, behavior tips, and general advice for keeping pets happy and healthy</h1>
<video className="Pet-videotwo" autoPlay loop muted>
<source  src={Animated}  type="video/mp4"/>
</video>      
</div>



<div className="Service-container-one">
<img width="480px" height="325px" className="munpin-image-one" src="https://static8.depositphotos.com/1005870/1056/i/950/depositphotos_10568084-stock-photo-miniature-pinscher-puppy.jpg"></img>

<div className="Abb-title">
<h1>Websites focusing on specific pet breeds provide detailed information about different breeds of dogs, cats, and other animals. They may cover breed characteristics, temperament, exercise needs, grooming requirements, and potential health issues.<br/><br/>
<span className="Abb-para">Many pet websites feature reviews and recommendations for pet products such as food, toys, beds, grooming tools, and more. These reviews help pet owners make informed decisions about the best products for their pets.</span></h1>
</div>
</div>



<div className="Service-container-two">
<div className="Abb-title-one">
<h1>Websites focusing on specific pet breeds provide detailed information about different breeds of dogs, cats, and other animals. They may cover breed characteristics, temperament, exercise needs, grooming requirements, and potential health issues.<br/><br/>
<span className="Abb-para-one">Many pet websites feature reviews and recommendations for pet products such as food, toys, beds, grooming tools, and more. These reviews help pet owners make informed decisions about the best products for their pets.</span></h1>
</div>

<img width="480px" height="325px" className="munpin-image-two" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35vAm0jkmOUEMrL7F3HEw3LXED3LSEkXKAg&usqp=CAU"></img>
</div>


<div className="Service-container-three">
   <div className="cardsone">
   <img className="cards-image1" width="480px" height="324px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrjcyY12WOB1w-x1Xj1exYCHMV1fv7Xj-4rvoJq2gMMAqWOwtoYtG0heqIPyQl1PTYfw&usqp=CAU"></img>
   <h1>MILTON</h1>
   </div>

   <div className="cardstwo">
   <img className="cards-image2" width="480px" height="324px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmY3SkYKQ8yukcbvwEe5ZneuQnDG8UkQePg&usqp=CAU"></img>
    <h1>CARTOR</h1>
   </div>


</div>


<div className="Service-container-four">
<video className="Pet-videothree" autoPlay loop muted>
<source  src={Animatedtwo}  type="video/mp4"/>
</video>      
<h1>Some pet websites also function as online pet stores, offering a wide range of pet products for sale. They provide a convenient platform for pet owners to purchase food, toys, accessories, and other supplies for their pets.</h1>
</div>


</>

  );
}

