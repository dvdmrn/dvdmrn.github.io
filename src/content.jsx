import React,{Component} from 'react';

import Emoji from './helpers.jsx';
import avi from './img/avi-pink.png';
import projIcon from './img/projicon.png';
import * as W69 from "./Windows69.jsx";
import ReactPlayer from 'react-player';
import content from './content-modules.json';

// import ProjImages from './projectimages.jsx';


const Welcome = ()=>{
  return(
          <div className="ContentWindowContent">
            <span className='gradient'><b>Welcome!</b></span> <p> <Emoji symbol='💡' label='lightbulb'/> TIP: Use panels to the left to navigate. </p> <img src={require('./img/construction_banner.gif')} style={{width:'100%'}}/> <p/> <center> <img src={require('./img/under_construction.gif')} style={{width:'300px'}}/> <img src={require('./img/construction_sign.gif')} style={{width:'200px'}}/> <marquee><b>Warning:</b> this website is <b>under construction</b></marquee> </center>
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


const Contact = ()=>{
  return(
          <div className="ContentWindowContent">
            Feel free to get into touch or stalk me in the following venues:<p/>
            <Emoji symbol="🦆" label="twitter bird"/> <b>Twitter:</b> <a href="https://twitter.com/david2vec" target="_blank">@david2vec</a><br/>
            <Emoji symbol="🐙" label="octopus"/> <b>Github:</b><a href="http://github.com/dvdmrn/" target="_blank" rel="noopener noreferrer">@dvdmrn</a><br/>
            <Emoji symbol="📧" label="mail"/> <b>Email:</b> dgm [dot] marino [at] gmail.com // dmarino [at] cim.mcgill.ca<br/>
            <Emoji symbol="🤝" label="very professional business hand shake"/> <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/dvdgvnnmrn/" target="_blank" rel="noopener noreferrer">david marino</a>
          </div>
  )
}

const Research = ()=>{
  return(
        <div className="ContentWindowContent">
        <img src={require('./img/research-banner.jpg')} style={{width:"100%"}}/><p/>
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
          <span className="gradient sectionHeader"><b>David Marino</b></span><p></p>
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
      <p style={{margin:"30px"}}/>

      <div>
      <Emoji symbol="🎬" label="film slate"/> <div className="indent">I first studied <b>film production</b> at at Capilano University. I completed a certificate in cinematography, then dropped out in my second year. </div>
      </div>

      <p style={{marginTop:"10px", marginBottom:"50px"}}/>

      <div>
      <Emoji symbol="🧠" label="brain"/> <div className="indent">The next logical step was then to do my BA in <b>Cognitive Systems</b> at the University of British Columbia. Cognitive Systems unites the fields of linguistics, psychology, philosophy, and computer science to study the design of intelligent systems and the interfaces between them (such as a robot, animal, or language).</div>
      </div>

      <p style={{marginTop:"10px", marginBottom:"50px"}}/>


      <div>
      <Emoji symbol="💻" label="computer"/> <div className="indent">After finishing my BA, it then extremely logically entailed that I do my masters in <b>Electrical and Computer Engineering</b> at McGill University, where I focused on <b>Human Computer Interaction</b>.</div>
      </div>

      <p style={{marginTop:"10px", marginBottom:"50px"}}/>

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
          Projects are organized by media type.<br/>
          Select a project from the dropdown <Emoji symbol="✨" label="sparkle"/><p></p>
      </div>
    )
}

const Projects_Film = (props) =>{
  return(
      <div className="ContentWindowContent">
        <span className="gradient"><b>film</b></span><p></p>

        I have expertise in a broad set of film crafts, including <b>directing</b>, <b>editing</b>, <b>cinematography</b>, <b>motion graphics</b>, and <b>producing</b>. Some of my clients include: <b>The Globe and Mail</b>, <b>Coast Capital Savings</b>, <b>BC Bioenergy Network</b>, and many more. I know how to carry a film through pre-production, production, post, and delivery. Below is a curated set of examples of past work.
        
        <hr/>
        <b>Demo Reel</b><br/>
        <i>My demo reel is general in nature and shows examples of past work in directing, cinematography, motion graphics, and editing</i><p></p>
        <center>
          <div className="playerWrapper">
             <ReactPlayer 
            className="video videoContent"

            url="https://www.youtube.com/embed/JKNi4sijfgI" 
            light="https://miro.medium.com/max/1400/1*t_G1kZwKv0p2arQCgYG7IQ.gif" 
            controls="true" 
            playing={props.playable}
            width='100%'
            height='100%'
            />
          </div>
        </center>
        <p></p>
    
       <hr/>
      <b>Director of Photography</b><br/>
      <i>Advertisement<br/>
      Client: <a href="https://filmora.wondershare.com/">Wondershare Filmora</a></i><p></p>
      <center>
      <div className="playerWrapper">
             <ReactPlayer 
            className="video videoContent"

            url="https://www.youtube.com/embed/qlSJ1vJ66iI" 
            light="https://miro.medium.com/max/1400/1*t_G1kZwKv0p2arQCgYG7IQ.gif" 
            controls="true" 
            playing={props.playable}
            width='100%'
            height='100%'
            />
          </div>
      </center>
      <p/>
      
      <hr/>
      <p></p>
      <b>Director, writer</b><br/>
      <i>Skit<br/>
      Magazine: <a href="https://www.facebook.com/SyrupTrap/">The Syrup Trap</a></i><p></p>
      <center>

            <div className="playerWrapper">
             <ReactPlayer 
            className="video videoContent"

            url="https://www.youtube.com/embed/WY8FivM1gMg" 
            light="https://miro.medium.com/max/1400/1*t_G1kZwKv0p2arQCgYG7IQ.gif" 
            controls="true" 
            playing={props.playable}
            width='100%'
            height='100%'
            />
          </div>

      </center>
      
      <hr/>
      <p></p>
      <b>Director, VFX</b><br/>
      <i>Music video<br/>
      Band: <a href="https://www.youtube.com/watch?v=ermbZmipxIs">April Fools Childrenhood</a></i><p></p>
      <center>

      <div className="playerWrapper">
             <ReactPlayer 
            className="video videoContent"

            url="https://www.youtube.com/embed/ermbZmipxIs" 
            light="https://miro.medium.com/max/1400/1*t_G1kZwKv0p2arQCgYG7IQ.gif" 
            controls="true" 
            playing={props.playable}
            width='100%'
            height='100%'
            />
          </div>

      </center>
      
      <hr/>
      <p></p>
      <b>Motion graphics</b><br/>
      <i>A web promotion for an augmented reality art exhibition called "We Were Hoping You'd Buy It". Spelling mistakes are intensiona;l.</i><p></p>
      <center>

      <div className="playerWrapper">
             <ReactPlayer 
            className="video videoContent"

            url="https://www.youtube.com/embed/-rkujE-pwMY" 
            light="https://miro.medium.com/max/1400/1*t_G1kZwKv0p2arQCgYG7IQ.gif" 
            controls="true" 
            playing={props.playable}
            width='100%'
            height='100%'
            />
          </div>

      </center>
      <p></p>
      </div>
    )
}

class Projects_Interactive extends Component {
constructor(props){
  super(props);
  this.state = {currentWindow:null};
}

  windowClosed = () => {
    console.log("window closed called!")
    this.setState({currentWindow:null})
  };


  handleSetWindow = (win) => {
    console.log("hello")
    this.setState({currentWindow:win})
  };

render(){
  return(
    <div className="ContentWindowContent interactive">
        <span className="gradient"><b>interactive</b></span><p></p>
<p/>
<center>
<div className="projWrapper">
        <W69.OpenWindowForever
          id="whatshap"
          content={<WhatsHap/>}
          title="WhatsHap"
          additionalClasses="subWindow"
          onSetWindow={this.handleSetWindow}
          onWindowClose={this.windowClosed}
          closedWindow={()=>{}}
        >


          <div className="projectButton">
          <img className="projButtonImage" src={require('./img/whatshapicon.png')} alt="project icon"/>
            <div className="innerProjButton">
            <b>WhatsHap</b><br/>
            A messaging app with haptic phonemes 
            </div>
          </div>


        </W69.OpenWindowForever>



      <W69.OpenWindowForever
        id="voodle"
        content={<Voodle id="voodle" playable={this.state.currentWindow=="voodle"}/>}
        title="Voodle"
        additionalClasses="subWindow"       
        onSetWindow={this.handleSetWindow}
        onWindowClose={this.windowClosed}
        closedWindow={()=>{}}

      >
        <div className="projectButton">
        <img className="projButtonImage" src={require('./img/voodleIcon.png')} alt="project icon"/> 
        <div className="innerProjButton">
          <b>Voodle</b><br/>
          Vocal doodling to sketch affective robot motion
          </div>
        </div>
      </W69.OpenWindowForever>



       <W69.OpenWindowForever
        id="voodle"
        content={<Voodle id="voodle" playable={this.state.currentWindow=="voodle"}/>}
        title="Voodle"
        additionalClasses="subWindow"       
        onSetWindow={this.handleSetWindow}
        onWindowClose={this.windowClosed}
        closedWindow={()=>{}}

      >
        <div className="projectButton">
        <img className="projButtonImage" src={require('./img/voodleIcon.png')} alt="project icon"/> 
        <div className="innerProjButton">
          <b>Voodle</b><br/>
          Vocal doodling to sketch affective robot motion
          </div>
        </div>
      </W69.OpenWindowForever>

          <div style={{display:"inline-block", backgroundColor:"#AAA"}}> asdf </div>           <div style={{display:"inline-block", backgroundColor:"#AAA"}}> two </div>
                    <div style={{display:"inline-block", backgroundColor:"#AAA"}}> t3re3 </div>
</div>
</center>
    </div>


    )

  }
}


function WhatsHap(){
  return(
      <div className="ContentWindowContent">
        <b>WhatsHap</b><p/>
        <img src={require('./img/algorithm-sketch.png')} style={{width:'100%', backgroundColor:"white",padding:"10px"}} loading="lazy"/><p/>
        WhatsHap is an instant messaging app that allows you to speak through touch. <br/>
        It converts a user's voice or a text message to a sequence of pattered vibrations
        corresponding to the message's constituent phonemes (~=meaningful speech sounds).<p/>
        <img src={require('./img/app-UI.png')} style={{width:'33%',float:'left'}} loading="lazy"/>A visual of the working prototype's UI is displayed on the left. Why ever would you want to message someone using only vibrations when speaking or texting may do just as well? There are many circumstances where visual and auditory modalities may be saturated, and you need an 'eyes free','ears free' way of communicating, such as doing a cooperative task in a noisy visually overwhelming environment. This channel of communication also has applications for deafblind users, though this is device was not validated nor designed alongside that user group.<p/>
          WhatsHap was designed in several stages. First, an haptic phoneme encoding system was developed and validated by Vargas et. al. Then, I sketched some designs for an initial UI. After some rounds of tweaking, I implemented a high fidelity prototype: the user wears two voice coil based vibrators on their arm, which connects to their phone, that in turn runs browser based web app that performs the speech->haptic computation, and frontend messaging interface. To evaluate the design of the system, we ran a user study with both expert and novice users of the system. <p/>
          <b>Key technologies:</b> Node.js, jquery, Socket.io, Google Speech-to-text<br/>
          <b>Tags</b>: Phoneme, conversation, multimodal
      </div>
    )
}

class Voodle extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div className="ContentWindowContent">
          <b>Voodle</b>
          <p/>
          <center>
          <div className="playerWrapper">
            <ReactPlayer 
              className="video videoContent"

              url="https://www.youtube.com/watch?v=IcUq9PZhN7w" 
              light="https://miro.medium.com/max/1400/1*t_G1kZwKv0p2arQCgYG7IQ.gif" 
              controls="true" 
              playing={this.props.playable}
              embedOptions={null}
              />
          </div>
          </center>
          <p>
            Voodle, or "vocal doodling", lets users sketch robot motion with their voice. At the Sensory Perception and Interaction Lab, we were interested in generating many emotional behaviours for simple 1-DOF robots. Voice naturally encodes emotional quality in the speech signal, so we thought, what's a better way to do this than simply using physical aspects of the speech signal to drive robot motion? Instead of having to manually puppet or pre-program symbolic emotional states <i>a priori</i>, we can use affective dimensions of speech as a basis to generate the behaviours on the fly.
          </p>
          <p>
            This project was presented at <a href="https://dis.acm.org" target="_blank" rel="noopener noreferrer">Designing Interactive Systems</a> 2017 and <a href="https://dl.acm.org/doi/10.1145/3064663.3064668" target="_blank" rel="noopener">published in its proceedings</a>.
          </p>

        </div>
      )

  }
}


function HapticSpeechEnhancement(){
  return(
    <div className="ContentWindowContent">
    <b>Haptic feedback for enhanced speech intelligibility</b><p/>
    <img src={require("./img/catgirl.jpg")} style={{width:'100%'}} loading="lazy"/><br/>
    <center><i>pictured: me wearing the vibrotactile device</i></center>
    <p>
    I lead a research project investigating the effect of haptic feedback on speech intelligibility--in other words: can you hear someone better if you their voice through your skin?
    </p>
    <p>
    When speaking, you are continuously subject to natural vibrations on your throat from the vocal folds during voicing. We simulated these vibrations through a single channel vibrotactile actuator, and tested its efficacy through manipulating different vibration styles and placements on the body. We found a 9% enhancement in intelligibility in terms of word recognition. My role on this project was managing and mentoring a team of collaborators, and leading the study.
    </p>

    <p>
    This project was presented in Acoustics Week in Canada, and published in Canadian Acoustics and the Journal of the Acoustical Society of America.
    </p>
    <p>
    <hr/>
    <b>posters</b>
    <ul>
    <li><a href="https://drive.google.com/open?id=11O8d92ozU-SmN0oHXqs7kPfHyrY3TcZF" target="_blank">singe channel voicing enhancement</a></li>
    <li><a href="https://drive.google.com/open?id=1K4lrzAcdAB_Al5OimSKbDckkeDt5W2M4" target="_blank">temporal offset for multimodal integration</a></li>
    </ul>
    </p>

    <p>
    <hr/>
    <b>coverage</b>
      <ul>
        <li><a href="https://languagesciences.ubc.ca/news-events/announcement-research-news-story-student-news/mar-4-2019-good-vibrations-how-vibrating" target="_blank">UBC language sciences report</a></li>
      </ul>
    </p>

    </div>
  )
}

function WeWereHopingYoudBuyIt(){
  return(
    <div className="ContentWindowContent">
    <b>We were hoping you'd buy it</b><p/>
    Augmented Reality Art Show
    <p>
    I created two augmented reality art installations as a part of an art show: We Were Hoping You'd Buy it at Oak St. Studios.
    </p>
    <W69.SimpleDropDown
    linkText="view curatorial statement"
    >
    <div className="quote">
    <p>
    “Very little academia is currently available on the growing relationship between Augmented Reality (AR) and art. Most of the existing written content on the matter either reports the recent MOMAR take over of the MOMA exhibition, or the ways in which museums, art institutions, or festivals, use the technology to attract bigger audiences. This scholastic desert is demonstrative of a few things. First, that the interaction between new technology and art making is still very much in its infancy. Second, that new technology in its deployment in art can not exceed its formal scheme. Finally, that its perceived usefulness relies merely on user engagement and added economical value. Eyemole's humorous take on the current state of affairs between AR and art is a reflection of their frustration with it. It is also a critical self-appraisal, as they actively operate in this structure through their commissioned work.
    </p>
    <p>
    What is the value of valueless art? Eyemole wants you to buy it both literally and figuratively. In the piece wARter, the co-operative outright states that "nothing happens," yet the expectation is that the "user/viewer" will find some value in this unique way to engage with the image on the wall. Much like the museums are now more concerned with user/audience engagement, the piece does not need to yield anything more than user action, driving traffic, therefore presence and potential profit. ARmerican experess, bARge, and We ARe hoping you'd buy it openly make this connection, as the price of the work is directly affected by how the viewer engages with it, in an arbitrary fashion. The very real economic demands of running an institution, or simply making a living from art making, requires an attention to "a bottom line," which increased foot-traffic and "brand recognition" drive up.
    </p>
    <p>
    Technological tools like AR provide an enticing solution to that problem, while promising a world of new artistic possibilities. As it is being applied, it merely panders to a type of technological fetishization, as it repeats its original case studied purpose: engaging the user for the sake of engaging the user. As such, the audience enters a purely reactive stance. Yet, the viewer does not react or act to the piece: they react largely to their own activity. Thus the art now achieves meaning solely via the user's self-involvement, regardless of the artist's original input. Similarly puARple, the prevailing model of AR treatment in art simply mirrors the user's desire for satisfying and unchallenging interaction.
    </p>
    <p>
    While Eyemole laments the lack of creativity in the use of their services, they subtly incorporated ways in which the show does more than "slap AR onto spoils." Eyemole created a true internet art exhibit, that is not just a video art piece that aesthetically mimics internet tropes in isolation. Each work interacts with We ARe hoping you'd buy it through the World Wide Web in real time, as an example. This challenges assumptions of archivability and permanence that digital technology is commonly understood to guarantee. The apparatuses required to make AR are not reproducible by the artist or a group of artists themselves: this medium remains subject to its enablement by a massive amount of technology and financial capital. Dozens of separate technologies and online services are employed to produce the spectacle, none of which could belong to the artist, the viewer, or the ceiling collector outright: the work is contingent on the continued existence of layers of other organizations and the terms of their End User License Agreements. Eyemole wants you to buy their art, but they also want you to buy into the actual possibilities of ARt.”
  </p>
  - Pauline Petit
  </div>
  </W69.SimpleDropDown>
  </div>
  )
}

function Corpus(){
  return(
    <div class="ContentWindowContent">
    <center><img src={require("./img/corpus-4.gif")} loading="lazy"/></center><p/>
    Corpus is currently a WIP prototype of an indie body horror rhythm game. In corpus, you fight for get your body back by synchronizing with the enemy.
    <p/>
    <b>design story:</b><br/>
    Corpus has undergone over many systematic iterations: it started with paper prototypes of interface mechanics, leading up to low fidelity mockups of gameplay mechanics in Unity, to finally more involved implementations with detailed assets. Throughout the development process, each major iteration was evaluated against naive users. Evaluations took many forms: for example, some users were asked to do a cognitive walkthrough or think-aloud task when playing the game, while others were given very minimal instructions, with critical incidents being noted and discussed. Much user feedback was gathered during semi-structured interviews after playing sessions. With Corpus, I used low-cost evaluation techniques to make as many drastic changes to the game as possible before high-fidelity implementations, which drastically saved development time.
    </div>
    )
}

export {Welcome, PooWindow, Research, Contact, About_Education, About, About_Skills, Projects, Projects_Film, Projects_Interactive}