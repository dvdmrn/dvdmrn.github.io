import { motion } from "framer-motion"
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// variants ------
const popupAnim = {
  visible:{
           scaleX:1,
           scaleY:1,
           transition:{
            type: 'spring',
            damping:30,
            stiffness:1000  
           }},

  hidden:{
          scaleX:0,
          scaleY:0,
          ease:'anticipate',
          }
}


  const fullSlide = {
  visible:{
          y:0,
          transition:{ ease: "easeInOut"}

        },

  hidden:{
          y:window.screen.height,
          transition:{ ease: "easeInOut"}

          }
}


const slideDown = {
  visible:{
           height:null,
         },

  hidden:{
          height:0,
          }
}


class GenericWindow extends Component {
  constructor(props){
    super(props);
    this.state = {draggable:false, mouseUp:false, closeIcon:false, closed:false}
  }
    
  render(){

        if(this.props.content != null){
        return(       
        <motion.div 
            drag={this.state.draggable}
            dragMomentum={false}
            className={this.props.visibile ? "ContentWindow "+this.props.additionalClasses : "ContentWindow invisibile"}
            style={this.props.overrideStyle}
            id={this.props.id}
            animate={(this.props.show) ? "visible":"hidden"}
            // animate={(this.props.show && this.props.toggle) ? "visible":"hidden"}

            variants={window.screen.width/window.screen.height > 1 ? popupAnim : fullSlide}
            >
              <motion.div 
              className="contentTopBar homeBar"
              onMouseEnter={ e=>this.setState({draggable:true, mouseUp:false}) }  
              onMouseLeave={ e=>this.state.mouseUp && this.setState({draggable:false, mouseUp:false}) }
              // alternatively I can use:
              // onHoverStart
              // onHoverEnd

              onMouseDown={e=>this.setState({draggable:true,mouseUp:false})}
              onMouseUp={ e=>{this.setState({mouseUp:true})} }
              >
  
                {this.props.title}

                <span 
                  className="close" 
                  id={this.props.id+"_close"}
                  onClick={(e)=>{
                    console.log("called");
                    e.stopPropagation();
                    this.props.toggleFunction();
                    this.props.closedWindow();
                    if(this.props.onWindowClose){
                      this.props.onWindowClose();
                    }
                  }}
                >x</span>


              </motion.div>
                {this.props.content} 
                {this.props.children}
  
        </motion.div>
      )}
      else{
        return(null)
      }
      }

  }
  


class OpenWindowForever extends Component{
  constructor(props){
    super(props)
    this.state = {showWindow:false, clicked:false}
  }

  toggleWindow(){
    this.setState({showWindow:!this.state.showWindow});
  }
  
  render(){
    return(
      <span>
        <div 
          className="link"
          onClick={(e)=>{
            e.stopPropagation()
            this.toggleWindow(); 
            this.setState({clicked:true, showWindow:true});
            if(this.props.onSetWindow){
              this.props.onSetWindow(this.props.id)
            }
          }}>
          {this.props.children}
        </div>
            <GenericWindow 
              visibile={this.state.clicked}
              show={this.state.showWindow} 
              toggle={this.state.showWindow}
              additionalClasses={this.props.additionalClasses}
              toggleFunction={this.toggleWindow.bind(this)}
              id={this.props.id} 
              content={this.props.content} 
              title={this.props.title}
              overrideStyle={this.props.overrideStyle}
              onWindowClose={this.props.onWindowClose}
              closedWindow={this.props.closedWindow}
              />
      </span>
      )
  }
}


class OpenWindow extends Component{
  constructor(props){
    super(props)
    this.state = {showWindow:false, clicked:false}
  }

  toggleWindow(){
    this.setState({showWindow:!this.state.showWindow});

  }

  render(){
    return(
    <span>
      <span 
        className="menuItem"
        onClick={()=>{this.toggleWindow(); this.setState({clicked:true, showWindow:true})}}
        >
        {this.props.text}
      </span>

      <GenericWindow 
        visibile={this.state.clicked}
        show={(this.props.id === this.props.targetWindow) && this.state.showWindow} 
        toggle={this.state.showWindow}

        overrideStyle={this.props.overrideStyle}
        toggleFunction={this.toggleWindow.bind(this)}
        id={this.props.id} 
        content={this.props.content} 
        title={this.props.title}
        closedWindow={this.props.closedWindow}

      />
    </span>
    )
  }
}



class OpenGallery extends Component{
  constructor(props){
    super(props)
    this.state = {showWindow:false, clicked:false}
    this.parentToContent.bind(this)
  }

  toggleWindow(){
    this.setState({showWindow:!this.state.showWindow});
  }

  parentToContent(id){
    var photo = document.getElementById(id);
    // photo.id  = "newId";
    document.getElementById("main").appendChild(photo); 
  }

  render(){
    return(
    <span>
      <span 
        className="menuItem"
        onClick={()=>{this.toggleWindow(); this.setState({clicked:true, showWindow:true}); this.parentToContent(this.props.id)}}
        >
        {this.props.text}
      </span>


      <Gallery
        show={(this.props.id === this.props.targetWindow) && this.state.showWindow} 
        toggle={this.state.showWindow}

        overrideStyle={this.props.overrideStyle}
        toggleFunction={this.toggleWindow.bind(this)}
        id={this.props.id} 
        content={this.props.content} 
        title={this.props.title}
        closedWindow={this.props.closedWindow}

      />

    </span>
    )
  }
}

class Gallery extends Component{
 constructor(props){
    super(props);
    this.state = {mouseUp:false, closeIcon:false, closed:false}
  }
    
  render(){

        if(this.props.content != null){
        return(       
        <div 
            className={this.props.show ? "Gallery "+this.props.additionalClasses : "Gallery invisibile"}
            style={this.props.overrideStyle}
            id={this.props.id}
            >
              <div 
                className="galleryTopBar"
              >
                {this.props.title}
                <span 
                  className="close" 
                  id={this.props.id+"_close"}
                  onClick={(e)=>{
                    e.stopPropagation();
                    this.props.toggleFunction();
                    this.props.closedWindow();
                    if(this.props.onWindowClose){
                      this.props.onWindowClose();
                    }
                  }}
                >x</span>
              </div>
                {this.props.content} 
                {this.props.children}
  
        </div>
      )}
      else{
        return(null)
      }
      }

}

class DropDown extends Component{
  constructor(props){
    super(props)
    this.state = {clicked:false}
  }

  render(){
    if((this.props.target === this.props.id) && !this.state.clicked){
      this.setState({clicked:true})    
    }
    
    return(
      <motion.div
        className={this.state.clicked ? "submenu" : "submenu invisibile"}
        animate={(this.props.target === this.props.id) ? "visible":"hidden"}
        variants={slideDown}
      >
        {this.props.children}
      </motion.div>
      )
  }
}

class SimpleDropDown extends Component{
  constructor(props){
    super(props)
    this.state = {clicked:false}
  }

  render(){
    return(
      <div>
      <a
      onClick={e=>this.setState({clicked:!this.state.clicked})}
      >
        {this.props.linkText}
      </a>
      <motion.div
      className={this.state.clicked ? "" : "invisibile"}
      animate={this.state.clicked ? "visible" : "hidden"}
      variants={slideDown}
      style={{overflowY:'hidden'}}
      >
      {this.props.children}
      </motion.div>
      </div>
      )
  }
}


class Icon extends Component{
  constructor(props){
    super(props)
    this.doubleClick.bind(this);
    this.state = {doubleClick:false,
                  open:false, 
                  opened:false}
  }

  doubleClick(){
    if(this.state.doubleClick){
      console.log("YES!")
      this.setState({doubleClick:false, open:true, opened:true})
    }
    else{
      this.setState({doubleClick:true})
      setTimeout(()=>{this.setState({doubleClick:false})},1000);
    }
  }

  toggleWindow(){
    this.setState({open:!this.state.open});
  }
  render(){
    return(
      <div
      className={this.props.className}
      >
        <motion.div
          className="icon"
          drag={window.screen.height/window.screen.width > 1 ? false : true}
          dragMomentum={false}
          onClick={()=>{window.screen.height/window.screen.width > 1 ? alert("yowza") : this.doubleClick()}}
          id={this.props.id}

        > 
            <img src={this.props.image}/><br/>
            <span>{this.props.name}</span>

        </motion.div>

        <GenericWindow 
                visibile={this.state.opened}
                show={this.state.open} 
                toggle={this.state.open}

                toggleFunction={this.toggleWindow.bind(this)}
                id={this.props.windowId} 
                content={this.props.content} 
                title={this.props.title}
                overrideStyle={this.props.overrideStyle}
                closedWindow={()=>{}}
        />
      </div>
      )

  }
}



export {GenericWindow, slideDown, OpenWindow, DropDown, OpenWindowForever, Icon, SimpleDropDown, OpenGallery};

