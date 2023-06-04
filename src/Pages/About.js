import React from 'react'
import { Link } from "react-router-dom"
import './About.css'
import Petvideo from  "./image/Petvideo.mp4";

function About() {






    return (


        <>

          <div className="Home-container-one">

           <h1 className="Home-title">Browse through a variety of different species, breeds, and ages of pets currently available for sale.</h1>

<div className="Home-container-image">         
 <img src={"https://images.pexels.com/photos/15713131/pexels-photo-15713131/free-photo-of-happy-dog-lying-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="500px" height="400px"/>
 <img src={"https://images.pexels.com/photos/15677168/pexels-photo-15677168/free-photo-of-dog-standing-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="500px" height="400px"/>
 <img src={"https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="500px" height="400px"/>
 </div>

          </div>


<div className="Home-card-container">

<div class="Home-cards-one">
<div class="Home-card-img">
<img   class="Home-card-img1" src={"https://images.pexels.com/photos/15175668/pexels-photo-15175668/free-photo-of-a-black-dog-in-close-up-shot.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="400px" height="322"/>
</div>
<div class="Home-card-body">
<h1 class="Home-T1">CATHER</h1>
<p>From playful puppies to majestic breeds, our dog images showcase the diverse world of canines. Get ready for wagging tails, wet noses, and floppy ears that will make you smile.</p>
</div>

<div class="Home-card-footer">

<button>Read More</button>
</div>
</div>


<div class="Home-cards-two">
<div class="Home-card-img">
<img   class="Home-card-img1" src={"https://images.pexels.com/photos/16194157/pexels-photo-16194157/free-photo-of-smiling-boy-with-dog-posing-in-garden.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="400px" height="322"/>
</div>
<div class="Home-card-body">
<h1 class="Home-T1">JONEA</h1>
<p>From playful puppies to majestic breeds, our dog images showcase the diverse world of canines. Get ready for wagging tails, wet noses, and floppy ears that will make you smile.</p>
</div>

<div class="Home-card-footer">

<button>Read More</button>
</div>
</div>

<div class="Home-cards-three">
<div class="Home-card-img">
<img   class="Home-card-img1" src={"https://images.pexels.com/photos/6399508/pexels-photo-6399508.jpeg?auto=compress&cs=tinysrgb&w=1600"} width="400px" height="322"/>
</div>
<div class="Home-card-body">
<h1 class="Home-T1">ESTHEA</h1>
<p>From playful puppies to majestic breeds, our dog images showcase the diverse world of canines. Get ready for wagging tails, wet noses, and floppy ears that will make you smile.</p>
</div>

<div class="Home-card-footer">

<button>Read More</button>
</div>
</div>

</div>

<div className="pet-video-container">
<h1 className="pet-video-title">Understanding your pet's body language and communication cues.</h1>
<video className="petvideo1" autoPlay loop muted>
<source  src={Petvideo}  type="video/mp4"/>
</video>
</div>

<div className="about-container-end">
<h1>Please note that our pet sales section operates with the utmost care and adheres to ethical standards. We prioritize the welfare and well-being of the animals, and we work closely with reputable breeders and individuals who share our commitment to responsible pet ownership.</h1>

</div>

            </>


)
}

export default About