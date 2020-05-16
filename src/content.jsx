import React from 'react';
import Emoji from './helpers.jsx';
import avi from './img/avi-pink.png'

const Welcome = ()=>{
  return(
          <div className="ContentWindowContent">
          <span className="gradient"><b>Welcome!</b></span>
          <p>
            <Emoji symbol="💡" label="lightbulb"/> TIP: Use panels to the left to navigate.
          </p>
          </div>
  )
}

const PooWindow = ()=>{
  return(
          <div className="ContentWindowContent">
          You've opened the poo window
          </div>
  )
}

const About = ()=>{

  return(
    <div className="ContentWindowContent">
    <img src={avi} id="avi" alt="it me"/>
          <span class="gradient"><b>David Marino</b></span><p></p>
          {"{designer, researcher, .*er}"}<p></p>
          Broadly speaking, I am a designer and researcher with a background in cognitive science. But I am also many other things. Here are a few:<p></p>

          I'm currently a MSc student in the department of Electrical and Computer Engineering at McGill University's <a href="http://srl.mcgill.ca/" target="_blank">Shared Reality Lab</a>. My work focuses on multimodal natural language interfaces between intelligent agents.<p></p>
          
          I'm a video generalist, with expertise in cinematography, editing, directing, motion graphics, and producing. <p></p>

          I make comics @ <a href="http://leftoversalad.com" target="_blank">leftoversalad</a> <p></p>

          I am an affiliate member of <a href="https://languagesciences.ubc.ca/" target="_blank">UBC Language Sciences</a>, and student member of the <a href="https://www.cirmmt.org/" target="_blank">Center for Interdisciplinary Research on Music Media and Technology</a><p></p>

          I use they/them pronouns.<p></p>
    </div>

    )
}

const About_Education = ()=>{
  return(
    <div className="ContentWindowContent">
      <span class="gradient"><b>education</b></span>
      <p>
      <Emoji symbol="🎬" label="film slate"/> <div class="indent">I first studied <b>film production</b> at at Capilano University. I completed a certificate in cinematography, then dropped out in my second year. </div>
      </p>
    
      <p>
      <Emoji symbol="🧠" label="brain"/> <div class="indent">The next logical step was then to do my BA in <b>Cognitive Systems</b> at the University of British Columbia. Cognitive Systems unites the fields of linguistics, psychology, philosophy, and computer science to study the design of intelligent systems and the interfaces between them (such as a robot, animal, or language).</div>
      </p>
      
      <p>
      <Emoji symbol="💻" label="computer"/> <div class="indent">After finishing my BA, it then extremely logically entailed that I do my masters in <b>Electrical and Computer Engineering</b> at McGill University, where I focused on <b>Human Computer Interaction</b>.</div>
      </p>
      Thank you for joining me on my very rational and logical educational journey.
    </div>
  )
}

const About_Skills = ()=>{

  return(
    <div className="ContentWindowContent">
      <span class="gradient"><b>skills</b></span>
      <hr/>
      <p>
        <b>languages</b>
      </p>
      <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>R</li>
        <li>Java</li>
      </ul>
      <hr/>
      <p>
        <b>frameworks/runtimes</b>
      </p>
      <ul>
        <li>Node.js</li>
        <li>React (I wrote this site in it!)</li>
        <li>jquery</li>
        <li>.NET</li>
      </ul>

      <hr/>
      <p>
        <b>software</b>
      </p>
      <ul>
        <li>Adobe Creative Suite
          <ul>
            <li>After Effects</li>
            <li>Premiere</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>InDesign</li>
            <li>Audition</li>
          </ul>
        </li>
        <li>Unity3D</li>
        <li>Praat</li>
        <li>Godot</li>
        <li>Audacity</li>
      </ul>

      <hr/>
      <p>
        <b>life skills</b>
      </p>
      <ul>
        <li>sorry I</li>
        <li>spent so much</li>
        <li>time developing</li>
        <li>works skills</li>
        <li>I don't even know</li>
        <li>how to put on</li>
        <li>my pants</li>

      </ul>

    </div>
    )
}


export {Welcome, PooWindow, About_Education, About, About_Skills}