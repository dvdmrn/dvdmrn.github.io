import { motion } from "framer-motion"
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/desktop.css';
import './style/loader.css';
import './style/menu.css';
import './style/rootstyle.css';
import './style/style.css';
import './style/windowstyle.css';
import './style/wireframe.css';

// import html from './testyMcTesterson.html'


import WebContent from './Test.jsx';
import * as W69 from './Windows69.jsx';





const TheBox = (props)=>{

    return(
      <motion.div 
        className="listy"
        animate={props.show ? "visible":"hidden"}
        variants={W69.slideDown}
      >
      {props.html}
      </motion.div>    
      )  
}

const Content = ()=>{
  return(
          <div>
          <span className="gradient"><b>Welcome!</b></span>
          <p>
            💡 TIP: Use panels to the left to navigate.
          </p>
          </div>
  )
}


class Clicky extends Component{
  constructor(props){
    super(props)
    this.state = {showWindow:true}
  }
  render(){
    return(
    <div>
      <div className="clickable" onClick={()=>{this.setState({showWindow:!this.state.showWindow})}}>clicky clicky</div>
      <TheBox show={this.state.showWindow} html={<ul><li>aieeee</li><li>item 2</li><li>item 900</li></ul>}/>
      <motion.div drag dragMomentum={false} className="box"/>
      <p></p>
      <WebContent/>
      <W69.GenericWindow id="home" content={Content} title="testy mc testerson">
        A little test for the children ;)
        <p><a href="http://www.google.com">ass</a></p>
      </W69.GenericWindow>
    </div>
    )
  }
}

class App extends Component{

  render() {
    // const {isVisible} = this.state;
    return (
      <Clicky/>
      )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));