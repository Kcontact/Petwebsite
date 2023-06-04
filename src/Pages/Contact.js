import { Link } from "react-router-dom"
import React, { useRef } from 'react' 
//import { useForm } from "react-hook-form"
import './Contact.css';



function Home() {

 


  return (

<>



<div class="form">
            <h2>Cotact Portal</h2>
            <input type="name" name="name" placeholder="Enter Name"/>
            <input type="name" name="name" placeholder="Enter Phone number"/>
            <input type="email" name="email" placeholder="Enter Email"/>
            <div class="form-group">
            <p for="message">Message</p>
            <textarea class="form-control" id="message" rows="4"></textarea>
          </div>

            <button class="btnn"  onclick="sendMail()"><a href="#">Submit</a></button>

     
            <p class="liw">Log in with</p>

            <div class="icons">
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
            </div>

        </div>


<div className="contact" id="contact">
       <div className="contact-info">
        <h1>I'm here to help you in any way that I can</h1>
        <h3>Provide information on dog health and nutrition, including tips on choosing the right dog food, feeding schedules, and portion control. Discuss common health concerns, preventive care, vaccinations, and regular check-ups.</h3>
        <p>Remember, these are just some content ideas to get started. We can tailor the website to address specific topics or requests based on the interests and needs of our audience. Let's create a space where dog lovers can come together, learn, and share their experiences!</p>
        <button><i className="lni lni-whatsapp"></i>Catact Me</button>
       </div>



 <div className="Contact-image">

<img className="Contact-pet" src="https://images.pexels.com/photos/230784/pexels-photo-230784.jpeg?auto=compress&cs=tinysrgb&w=1600"  height="600" width="600"></img>

     </div>
     </div>
      
     <div class="grid-container">
  <div><h1>Link</h1><p>Home</p><p>Doc</p><p>EXample</p></div>
    <div className="grid-one"><h1>Guidence</h1><p>Themes</p><p>Blog</p><p>Function</p></div>
    
    <div><h1>Project</h1><p>Breeds</p><p>Variety</p><p>Service</p></div>  
    <div  className="grid-two"><h1>Community</h1><img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2etThATbfHEvFTsIqewYF9zHsFYJt_58Rq6ljXDtPVso9s5_&s"></img>
        <img width="42px" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"></img>
        <img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMJ6tQ5pDQfcokDnXi0ttDx5lIx_05wNONEIYYFeSkasKDG8&s"></img>
        <img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfF1wssLcngowS2pswbQQWqaPHHp-i2zi0idtNVv3ZNplFCE&s"></img>
        <p>Helps</p><p><br></br></p></div>
  </div>


      



      </>

);
  }
  
  export default Home;