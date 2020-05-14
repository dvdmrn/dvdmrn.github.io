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
  // TODO: constructor with state to manage top bar click
  
  render(){    
	return(	<motion.div 
					drag 
					dragMomentum={false}
					className="ContentWindow"
					id={this.props.id}>
				<div className="contentTopBar homeBar"> {this.props.title} </div>
				<div className="ContentWindowContent">
					{this.props.children}

				</div>
			</motion.div>
		)
  }

}

export {GenericWindow, slideDown};

