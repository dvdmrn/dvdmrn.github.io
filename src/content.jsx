import React from 'react';
import Emoji from './helpers.jsx';
import avi from './img/avi-pink.png';
import projIcon from './img/projicon.png';
import * as W69 from "./Windows69.jsx";
import ReactPlayer from 'react-player';

// import ProjImages from './projectimages.jsx';


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

const Research = ()=>{
  return(
        <div className="ContentWindowContent">
          My research spans the fields of HCI/HRI, AI and cognitive science. I'm broadly interested in designing for subsymbolic, emergent, or non-compositional aspects of Language. Such techniques can be used to offload the representational work required by an intelligent system, and create engaging user experiences (that may have otherwise been degraded using a system with over-engineered intelligence).<br/>Some examples of past work includes using your voice as a basis to <a href="https://www.youtube.com/watch?v=IcUq9PZhN7w">control an emotionally expressive robot pet</a>, or using vibrations to enhance the intelligibility of speech in noise.<p></p>
  
            <b>Research Interests</b>
            <ul>
  
              <li>Interactive alignment between natural and artificial social agents, specifically within communicative tasks</li>
              <li>Subsymbolic representation of natural language semantics/pragmatics.</li>
              <li>Multimodal communication</li>
              <li>Affective computing</li>
              <li>HCI/HRI</li>
              <li>narrative</li>
  
            </ul>
  
            <p></p>
  
            <a href="https://scholar.google.com/citations?user=dLgup7MAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">My publications</a>.<p></p>
  
          <a href="" target="_blank" rel="noopener noreferrer">Here</a> are some of my favorite articles
        </div>
  )
}

const About = ()=>{

  return(
    <div className="ContentWindowContent">
    <img src={avi} id="avi" alt="it me"/>
          <span className="gradient"><b>David Marino</b></span><p></p>
          {"{designer, researcher, .*er}"}<p></p>
          Broadly speaking, I am a designer and researcher with a background in cognitive science. But I am also many other things. Here are a few:<p></p>

          I'm currently a MSc student in the department of Electrical and Computer Engineering at McGill University's <a href="http://srl.mcgill.ca/" target="_blank" rel="noopener noreferrer">Shared Reality Lab</a>. My work focuses on multimodal natural language interfaces between intelligent agents.<p></p>
          
          I'm a video generalist, with expertise in cinematography, editing, directing, motion graphics, and producing. <p></p>

          I make comics @ <a href="http://leftoversalad.com" target="_blank" rel="noopener noreferrer">leftoversalad</a> <p></p>

          I am an affiliate member of <a href="https://languagesciences.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC Language Sciences</a>, and student member of the <a href="https://www.cirmmt.org/" target="_blank" rel="noopener noreferrer">Center for Interdisciplinary Research on Music Media and Technology</a><p></p>

          I use they/them pronouns.<p></p>
    </div>

    )
}

const About_Education = ()=>{
  return(
    <div className="ContentWindowContent">
      <span className="gradient"><b>education</b></span>
      <p/>
      <Emoji symbol="🎬" label="film slate"/> <div className="indent">I first studied <b>film production</b> at at Capilano University. I completed a certificate in cinematography, then dropped out in my second year. </div>
    
      <p/>
      <Emoji symbol="🧠" label="brain"/> <div className="indent">The next logical step was then to do my BA in <b>Cognitive Systems</b> at the University of British Columbia. Cognitive Systems unites the fields of linguistics, psychology, philosophy, and computer science to study the design of intelligent systems and the interfaces between them (such as a robot, animal, or language).</div>
      
      <p/>
      <Emoji symbol="💻" label="computer"/> <div className="indent">After finishing my BA, it then extremely logically entailed that I do my masters in <b>Electrical and Computer Engineering</b> at McGill University, where I focused on <b>Human Computer Interaction</b>.</div>
      Thank you for joining me on my very rational and logical educational journey.
    </div>
  )
}

const About_Skills = ()=>{

  return(
    <div className="ContentWindowContent">
      <span className="gradient"><b>skills</b></span>
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


const Projects = () =>{
  return(
      <div className="ContentWindowContent">
          Wowee look at all these chickens.<p></p>
      </div>
    )
}

const Projects_Film = () =>{
  return(
      <div className="ContentWindowContent">
        <span className="gradient"><b>film</b></span><p></p>

        I have expertise in a broad set of film crafts, including <b>directing</b>, <b>editing</b>, <b>cinematography</b>, <b>motion graphics</b>, and <b>producing</b>. Some of my clients include: <b>The Globe and Mail</b>, <b>Coast Capital Savings</b>, <b>BC Bioenergy Network</b>, and many more. I know how to carry a film through pre-production, production, post, and delivery. Below is a curated set of examples of past work.
        
        <hr/>
        <b>Demo Reel</b><br/>
        <i>My demo reel is general in nature and shows examples of past work in directing, cinematography, motion graphics, and editing</i><p></p>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JKNi4sijfgI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        <p></p>
        
        <hr/>
        <b>Director of Photography</b><br/>
        <i>Advertisement<br/>
        Client: <a href="https://filmora.wondershare.com/">Wondershare Filmora</a></i><p></p>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qlSJ1vJ66iI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        <p/>
        
        <hr/>
        <p></p>
        <b>Director, writer</b><br/>
        <i>Skit<br/>
        Magazine: <a href="https://www.facebook.com/SyrupTrap/">The Syrup Trap</a></i><p></p>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WY8FivM1gMg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        
        <hr/>
        <p></p>
        <b>Director, VFX</b><br/>
        <i>Music video<br/>
        Band: <a href="https://www.youtube.com/watch?v=ermbZmipxIs">April Fools Childrenhood</a></i><p></p>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ermbZmipxIs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        
        <hr/>
        <p></p>
        <b>Motion graphics</b><br/>
        <i>A web promotion for an augmented reality art exhibition called "We Were Hoping You'd Buy It". Spelling mistakes are intensiona;l.</i><p></p>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-rkujE-pwMY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        <p></p>

      </div>
    )
}

const Projects_Interactive = ()=>{

return(
  <div className="ContentWindowContent">


    <p/>
    <W69.OpenWindowForever
      id="whatshap"
      content={<WhatsHap/>}
      title="WhatsHap"
      overrideStyle={{left:0,top:0,marginLeft:150,marginTop:50}}
    >
      <span className="gradient"><b>interactive</b></span><p></p>
      <div className="fullbutton">
      <img src={require('./img/whatshapicon.png')} alt="project icon" className="projicon"/> <b>WhatsHap</b><br/>
        A messaging app with haptic phonemes 
      </div>
    </W69.OpenWindowForever>


    <p/>
    <W69.OpenWindowForever
      id="voodle"
      content={<Voodle/>}
      title="Voodle"
      overrideStyle={{left:0,top:0,marginLeft:150,marginTop:50}}
    >
      <div className="fullbutton">
      <img src={require('./img/voodleIcon.png')} alt="project icon" className="projicon"/> <b>Voodle</b><br/>
      Vocal doodling to sketch affective robot motion
      </div>
    </W69.OpenWindowForever>

    <p/>
    <div className="fullbutton">
    <img src={projIcon} alt="project icon" className="projicon"/> <b>Haptic Speech Enhancement</b><br/>
    Using vibrations to enhance the intelligibility of speech in noise
    </div>

    <p/>
    <div className="fullbutton">
    <img src={projIcon} alt="project icon" className="projicon"/> <b>Corpus</b><br/>
    Rhythm based body horror game
    </div>

    <p/>
    <div className="fullbutton">
    <img src={projIcon} alt="project icon" className="projicon"/> <b>Co-op Ride Hailing</b><br/>
    A feasibility assessment for a cooperative ride hailing model in Vancouver.
    </div>

    <p/>
    <div className="fullbutton">
    <img src={projIcon} alt="project icon" className="projicon"/> <b>Single In Your Area</b><br/>
    Tinder at the end of the world
    </div>

    <p/>
    <div className="fullbutton" id="ARt_selector">
    <img src={projIcon} alt="project icon" className="projicon"/> <b>We Were Hoping You'd Buy It</b><br/>
    Augmented Reality art show about Augmented Reality art shows UPDATED 2
    </div>

    <p/>
    <div className="fullbutton">
    <img src={projIcon} alt="project icon" className="projicon"/> <b>The Syrup Trap</b><br/>
    Canadian humor magazine
    </div>
  </div>
  )
}


function WhatsHap(){
  return(
      <div className="ContentWindowContent">
        <b>WhatsHap</b><p/>
        <img src={require('./img/algorithm-sketch.png')} style={{width:'100%'}} loading="lazy"/><p/>
        WhatsHap is an instant messaging app that allows you to speak through touch. <br/>
        It converts a user's voice or a text message to a sequence of pattered vibrations
        corresponding to the message's constituent phonemes (~=meaningful speech sounds).<p/>
        <img src={require('./img/app-UI.png')} style={{width:'33%',float:'left'}} loading="lazy"/>A visual of the working prototype's UI is displayed on the left. Why ever would you want to message someone using only vibrations when speaking or texting may do just as well? There are many circumstances where visual and auditory modalities may be saturated, and you need an 'eyes free','ears free' way of communicating, such as doing a cooperative task in a noisy visually overwhelming environment. This channel of communication also has applications for deafblind users, though this is device was not validated nor designed alongside that user group.<p/>
          WhatsHap was designed in several stages. First, an haptic phoneme encoding system was developed and validated by Vargas et. al. Then, I sketched some designs for an initial UI. After some rounds of tweaking, we ran a user study with both expert and novice users of the system. <p/>
          <b>Key technologies:</b> Node.js, jquery, Socket.io, Google Speech-to-text<br/>
          <b>Tags</b>: Phoneme, conversation, multimodal
      </div>
    )
}

function Voodle(props){
  return(
      <div className="ContentWindowContent">
        <b>Voodle</b>
        <p>
        <center>
        <ReactPlayer url="https://www.youtube.com/watch?v=IcUq9PZhN7w" light="https://miro.medium.com/max/1400/1*t_G1kZwKv0p2arQCgYG7IQ.gif" playing={props.playVideo} controls="true"/>
        </center>
        </p>
        <p>
          Voodle, or "vocal doodling", lets users sketch robot motion with their voice. At the Sensory Perception and Interaction Lab, we were interested in generating many emotional behaviours for simple 1-DOF robots. Voice naturally encodes emotional quality in the speech signal, so we thought, what's a better way to do this than simply using physical aspects of the speech signal to drive robot motion? Instead of having to manually puppet or pre-program symbolic emotional states <i>a priori</i>, we can use affective dimensions of speech as a basis to generate the behaviours on the fly.
        </p>

      </div>
    )
}


export {Welcome, PooWindow, Research, About_Education, About, About_Skills, Projects, Projects_Film, Projects_Interactive}