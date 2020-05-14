import { motion } from "framer-motion"
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// variants ------
const popupAnim = {
  visible:{opacity:1,
           scaleX:1,
           scaleY:1,
           transition:{
            type: 'spring'
           }},

  hidden:{opacity:0,
          scaleX:0,
          scaleY:0,
          transition:{
            type: 'spring',
            scaleX:{duration:1},
            scaleY:{duration:0.4}
          }}
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
    this.state = {draggable:false, mouseUp:false}
  }
    
  render(){return( 

        <motion.div 
            drag={this.state.draggable}
            dragMomentum={false}
            className={this.props.visibile ? "ContentWindow" : "ContentWindow invisibile"}
            id={this.props.id}
            animate={this.props.show ? "visible":"hidden"}
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
              </motion.div>
              <div className="ContentWindowContent">
                {this.props.content} 
                {this.props.children}
  
              </div>
        </motion.div>
      )}
  
  }
  




export {GenericWindow, slideDown};

