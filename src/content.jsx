import React from 'react';
import Emoji from './helpers.jsx';

const Welcome = ()=>{
  return(
          <div>
          <span className="gradient"><b>Welcome!</b></span>
          <p>
            <Emoji symbol="💡" label="lightbulb"/> TIP: Use panels to the left to navigate.
          </p>
          </div>
  )
}

const PooWindow = ()=>{
  return(
          <div>
          You've opened the poo window
          </div>
  )
}


const About_Education = ()=>{
  return(
    <div>
      <span class="gradient"><b>education</b></span>
      <p>
      🎬 <div class="indent">I first studied <b>film production</b> at at Capilano University. I completed a certificate in cinematography, then dropped out in my second year. </div>
      </p>
    
      <p>
      🧠 <div class="indent">The next logical step was then to do my BA in <b>Cognitive Systems</b> at the University of British Columbia. Cognitive Systems unites the fields of linguistics, psychology, philosophy, and computer science to study the design of intelligent systems and the interfaces between them (such as a robot, animal, or language).</div>
      </p>
      
      <p>
      💻 <div class="indent">After finishing my BA, it then extremely logically entailed that I do my masters in <b>Electrical and Computer Engineering</b> at McGill University, where I focused on <b>Human Computer Interaction</b>.</div>
      </p>
      Thank you for joining me on my very rational and logical educational journey.
    </div>
  )
}



export {Welcome, PooWindow, About_Education}