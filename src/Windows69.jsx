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

  // hidden:{
  //         scaleX:0,
  //         scaleY:0,
  //         transition:{
  //           type: 'spring',
  //           scaleX:{duration:1},
  //           scaleY:{duration:0.4}
  //         }}
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
    
  render(){return( 

      //   $(`.${id}Bar`).append(`<span class="close" id="${id}_close">x</span>`)
      // $(`#${id}_close`).click(()=>{
      // $(`#${this.name}` ).toggle("size", 200 );       


        <motion.div 
            drag={this.state.draggable}
            dragMomentum={false}
            className={this.props.visibile ? "ContentWindow" : "ContentWindow invisibile"}
            id={this.props.id}
            animate={(this.props.show) ? "visible":"hidden"}
            // animate={(this.props.show && this.props.toggle) ? "visible":"hidden"}

            variants={popupAnim}
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
                  onClick={this.props.toggleFunction}
                >x</span>


              </motion.div>
                {this.props.content} 
                {this.props.children}
  
        </motion.div>
      )}
  
  }
  

// class OpenWindowForever extends Component{
//   constructor(props){
//     super(props)
//     this.state = {showWindow:false, clicked:false}
//   }

//   toggleWindow(){
//     this.setState({showWindow:!this.state.showWindow});
//   }
// }


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

        toggleFunction={this.toggleWindow.bind(this)}
        id={this.props.id} 
        content={this.props.content} 
        title={this.props.title}

      />
    </span>
    )
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


export {GenericWindow, slideDown, OpenWindow, DropDown};

