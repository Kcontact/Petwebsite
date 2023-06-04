import React from 'react'
import { Link } from "react-router-dom"
import './Home.css'
import bgvideo from  "./image/bgvideo.mp4";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'





function Home() {

    const spanStyle = {
        padding: '10px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '800px',
      }
      const slideImages = [
        {
          url: 'https://cdn.pixabay.com/photo/2017/11/26/15/08/animal-2979089_640.jpg'

        },
        {
          url: 'https://cdn.pixabay.com/photo/2017/08/08/17/54/dog-2612081_640.jpg'

        },
        {
          url: 'https://cdn.pixabay.com/photo/2023/03/15/14/22/dog-7854681_640.jpg'

        },
      ];

return (
<>



<div className="container-one">
<div className="Container-title">
<h1>Welcome to our Pet Image Gallery!</h1> 
</div>
<div className="image-1">         
 <img src={"https://img.freepik.com/premium-photo/large-group-cats-dogs-looking-camera-blue-background_191971-28557.jpg?size=626&ext=jpg&ga=GA1.1.621346818.1653958706&semt=sph"} width="500px" height="400px"/>
 <img src={"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} width="500px" height="400px"/>
 <img src={"https://img.freepik.com/premium-photo/group-pets-dog-cat-bird-rabbit_191971-22463.jpg?size=626&ext=jpg&ga=GA1.1.621346818.1653958706&semt=sph"} width="500px" height="400px"/>
 </div>
</div>


<div class="Container-two-title">
<h1 className="two-title">We have a wide collection of adorable pet images that will melt your heart. Whether you're a dog lover, a cat enthusiast, or a fan of other furry friends, we've got you covered. Our curated gallery features high-quality images capturing the cutest moments of pets in various poses and situations.</h1>
</div>

<div class="container-two">
 <div class="cards-one">
<div class="card-img">
<img   class="card-img1" src={"https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="400px" height="322"/>
</div>
<div class="card-body">
<h1 class="T1">INDIA</h1>
<p>From playful puppies to majestic breeds, our dog images showcase the diverse world of canines. Get ready for wagging tails, wet noses, and floppy ears that will make you smile.</p>
</div>

<div class="card-footer">

<button>Read More</button>
</div>
</div>


    <div class="cards-two">
    <div class="card-img">
<img  class="card-img2" src={"https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1600"}  width="400px" height="300"/>
    </div>
    <div class="card-body">
    <h1 class="T2">ENGLAND</h1>
    <p id="para1"> Looking for something beyond dogs and cats? Our collection also includes images of rabbits, guinea pigs, hamsters, and other adorable small pets. These tiny creatures will make you go "aww" in no time.</p>
    </div>
    
    <div class="card-footer">
    
    <button>Read More</button>
      
    </div>
</div>
        <div class="cards-three">
        <div class="card-img">
        <img  class="card-img3" src={"https://images.pexels.com/photos/1975516/pexels-photo-1975516.jpeg?auto=compress&cs=tinysrgb&w=1600"}  width="400px" height="300"/>
        </div>
        <div class="card-body">
        <h1 class="T3">FRANCE</h1>
        <p>Are you fascinated by exotic pets? Discover images of reptiles, amphibians, and other unusual companions that bring a touch of the wild into your home. Explore the extraordinary world of snakes, lizards, turtles, and more.</p>
        </div>
        
        <div class="card-footer">
        
        <button>Read More</button>
        
        
        </div>
               
        </div>
            
    </div>

<div className="video-wave">
<img src={"https://images.pexels.com/photos/247968/pexels-photo-247968.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="600px" height="361px"/>
<video className="video1" autoPlay loop muted>
<source  src={bgvideo} type="video/mp4"/>
</video>
<img src={"https://images.pexels.com/photos/605496/pexels-photo-605496.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="600px" height="363px"/>
</div>



<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>



      <div class="Home-grid-container">
  <div><h1>Link</h1><p>Home</p><p>Doc</p><p>EXample</p></div>
    <div><h1>Guidence</h1><p>Themes</p><p>Blog</p><p>Function</p></div>
    <div><h1>Project</h1><p>Breeds</p><p>Variety</p><p>Service</p></div>  
    <div><h1>Community</h1><img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2etThATbfHEvFTsIqewYF9zHsFYJt_58Rq6ljXDtPVso9s5_&s"></img>
        <img width="42px" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"></img>
        <img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMJ6tQ5pDQfcokDnXi0ttDx5lIx_05wNONEIYYFeSkasKDG8&s"></img>
        <img  width="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfF1wssLcngowS2pswbQQWqaPHHp-i2zi0idtNVv3ZNplFCE&s"></img>
        <p>Helps</p><p><br></br></p></div>
  </div>


      <div className="Home-fotter">
    
    <h1>&copy; 2023 WebKart. All Rights Reserved.</h1>


    </div>







                  </>
      

);
  }
  
  export default Home;

  