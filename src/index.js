import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {PhotoGallery} from './PhotoGallery'
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";

import './style/style.css';


import { motion } from "framer-motion"

import * as W69 from './Windows69.jsx';
import * as Content from './content.jsx';
import * as Pet from './Pet.jsx'



class Menu extends Component{
  constructor(props){
    super(props)
    this.state = {
      lastWindow:"home", 
      targetWindow:"home", 
      targetDD:"x",
      offScreen:false,
      menuBase:0
    };

    this.closeLastWindow = this.closeLastWindow.bind(this);
    this.onPan = this.onPan.bind(this);

  }
  

  closeLastWindow(){
    console.log(`last window: ${this.state.lastWindow}`);
  }

  onPan(e, info){
    console.log(this.state.lastWindow != this.state.targetWindow)
    if((info.delta.x < -10) && 
        this.state.lastWindow != this.state.targetWindow &&
        window.screen.width/window.screen.height < 1){
      this.setState({offScreen:true});
    }
    if(info.delta.x > 10){
      this.setState({offScreen:false});

    }
  }
  closedWindow(){
    console.log("closed window called!")
    this.setState({targetWindow:'x'})
  }
  render(){
    return(
       <motion.div 
          className="menu ui-widget-content" 
          id="draggable" 
          onPan={this.onPan}
          animate={this.state.offScreen ? {x:-250} : {x:0}}
          >
          <div className="topbar gradient"> menu </div>
          <div id="menuItems">

            <div onClick={ ()=>{this.setState({targetWindow:"home",targetDD:null, lastWindow:"home"})} }>
              <W69.OpenWindow 
                id="home"
                text="+ home"
                content={<Content.Welcome/>}
                title="home"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}
                closedWindow={this.closedWindow.bind(this)}
                forceShowWindow={window.screen.height/window.screen.width < 1}

                />
            </div>
            <p>
            </p>

            <div onClick={ e=>this.setState({targetWindow:"about", targetDD:"about_DD",lastWindow:"about"}) }>
              <W69.OpenWindow 
                id="about"
                text="+ about"
                content={null}
                title="about"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}
                closedWindow={this.closedWindow.bind(this)}

                />
            </div>
            <W69.DropDown
              id="about_DD"
              target={this.state.targetDD}
            >

                <div onClick={ e=>this.setState({targetWindow:"bio", lastWindow:"bio"}) }>
                  <W69.OpenWindow 
                    id="bio"
                    text="⤷ bio"
                    content={<Content.About/>}
                    title="bio"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}

                    />
                </div>

                <div onClick={ e=>this.setState({targetWindow:"edu",lastWindow:"edu"}) }>
                  <W69.OpenWindow 
                    id="edu"
                    text="⤷ edu."
                    content={<Content.About_Education/>}
                    title="education"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}

                    />
                </div>
                <div onClick={ e=>this.setState({targetWindow:"cv",lastWindow:"cv"}) }>
                  <W69.OpenWindow 
                    id="cv"
                    text="⤷ cv"
                    content={<Content.About_Education/>}
                    title="cv"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}

                    />
                </div>
                <div onClick={ e=>this.setState({targetWindow:"skills",lastWindow:"skills"}) }>
                  <W69.OpenWindow 
                    id="skills"
                    text="⤷ skills"
                    content={<Content.About_Skills/>}
                    title="skills"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}

                    />
                </div>          
            </W69.DropDown>
            <p></p>
            <div onClick={ e=>this.setState({targetWindow:"research",targetDD:null,lastWindow:"research"}) }>
              <W69.OpenWindow 
                id="research"
                text="+ research"
                content={<Content.Research/>}
                title="research"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}
                closedWindow={this.closedWindow.bind(this)}
                />
            </div>

            <p></p>

            <div onClick={ e=>this.setState({targetWindow:"projects", targetDD:"projects_DD",lastWindow:"projects"}) }>
              <W69.OpenWindow 
                id="projects"
                text="+ projects"
                content={null}
                title="projects"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}
                closedWindow={this.closedWindow.bind(this)}
                />
            </div>

            <W69.DropDown
              id="projects_DD"
              target={this.state.targetDD}
            >
              <div onClick={ e=>this.setState({targetWindow:"film",lastWindow:"film"}) }>
                  <W69.OpenWindow 
                    id="film"
                    text="⤷ film"
                    content={<Content.Projects_Film playable={this.state.targetWindow=="film"}/>}
                    title="film"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}
                    />
              </div> 

              <div onClick={ e=>this.setState({targetWindow:"photos",lastWindow:"photos"}) }>
                  <W69.OpenGallery 
                    id="photos"
                    text="⤷ photos"
                    content={<PhotoGallery/>}
                    title="photos"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}
                    />
              </div>

              <div onClick={ e=>this.setState({targetWindow:"interactive",lastWindow:"interactive"}) }>
                  <W69.OpenWindow 
                    id="interactive"
                    text="⤷ 🤖"
                    content={<Content.Projects_Interactive/>}
                    title="interactive"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}
                    />
              </div>              

              <div onClick={ e=>this.setState({targetWindow:"comics",lastWindow:"comics"}) }>
                  <W69.OpenWindow 
                    id="comics"
                    text="⤷ comics"
                    content={<Content.PooWindow/>}
                    title="comics"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    closedWindow={this.closedWindow.bind(this)}
                    />
              </div>

            </W69.DropDown>
            <p/>
             <div onClick={ e=>this.setState({targetWindow:"contact",targetDD:null,lastWindow:"contact"}) }>
              <W69.OpenWindow 
                id="contact"
                text="+ contact"
                content={<Content.Contact/>}
                title="contact"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}
                closedWindow={this.closedWindow.bind(this)}                
                />
            </div>



          </div>
        </motion.div>
      )

  }
}

class Desktop extends Component{
  // ...
  render(){
    return(
      <W69.Icon
        image={require('./img/bonzi.png')}
        name="pet.exe"
        id="petIcon"
        className="desktopApp"

        windowId="PetWindow" 
        content={<Pet.Pet/>}
        title="virtual pet"
        />
      )
  }
}

class LeftWrapper extends Component{
  constructor(props){
    super(props)
    }

    render(){
    return(
      <div id="LeftWrapper">
        <div id="mobileMask"/>
        {this.props.children}
      <W69.Icon
        image={require('./img/pet-mobile.png')}
        name="PetApp"
        id="petIcon"
        className="mobileApp"

        windowId="PetWindow" 
        content={<Pet.Pet/>}
        title="virtual pet"
        />
      </div>

      )
  }
}

const loader = document.querySelector('.loadingscreen');

const showLoader = () => loader.classList.remove('loadingscreen--hide');
const hideLoader = () => loader.classList.add('loadingscreen--hide');
class App extends Component{
  
  constructor(props){
    super(props)
    this.fadeOutLoader.bind(this);
    this.removeLoader.bind(this);

  }
  componentDidMount(){
    setTimeout(e=>this.fadeOutLoader(),1000)
  }

  fadeOutLoader(){
    this.props.hideLoader();
    setTimeout(e=>this.removeLoader(),1000)


  }
  removeLoader(){
    loader.classList.add('invisibile');

  }

  render() {
    
    return (
        <div className="content" id="main">
          <Desktop/>
          <LeftWrapper>
            <Menu/>
          </LeftWrapper>
        </div>
      )
  }
}

ReactDOM.render(<App 
                  hideLoader={hideLoader}
                  showLoader={showLoader} />, 
                  document.getElementById('root'));