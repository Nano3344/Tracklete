import React from 'react';
import Gymnastic from '../gymnastic.png';
import Plates from '../plates.png';
import Tools from '../tools.png';

export const Homepage = () => {
  return(
    <div>
    <header class="Home-header">
     <h2 class="Home-heading">Tracklete</h2>
     <nav class="Home-nav">
       <a href="#">Try it</a>
     </nav>
    </header>
    <div class="Home-section">
       <div class="Home-description">
          <h1>Track <span>your</span> Gym <span>Progress</span></h1>
          <h3>The Tracklete app was built, to build you</h3>
          <div class="Button-section">
            <a href="#">Try it</a>
            </div>
       </div>
       <div class="Home-visuals">
          <div class="Visual-rectangle"></div>
          <img src={Gymnastic} />
          <img src={Plates} />
          <img src={Tools} />
       </div>
    </div>
    </div>
  )
}
