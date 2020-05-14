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


import * as W69 from './Windows69.jsx';
import * as Content from './content.jsx';


class OpenWindow extends Component{
  constructor(props){
    super(props)
    this.state = {showWindow:false, clicked:false}
  }
  render(){
    return(
    <span>
      <span className={this.props.className} onClick={()=>{this.setState({showWindow:!this.state.showWindow, clicked:true})}}>{this.props.text}</span>

      <W69.GenericWindow 
        visibile={this.state.clicked} 
        show={this.state.showWindow} 
        id={this.props.id} 
        content={this.props.content} 
        title={this.props.title} 

      />
    </span>
    )
  }
}

class Menu extends Component{
  constructor(props){
    this.lastWindow = "home";
  }
  // TODO: Meny will handle state control flow for opening menu items
  // so that windows are mutually exclusive
}


class App extends Component{

  render() {
    // const {isVisible} = this.state;
    return (

      <div class="content">
        <div id="LeftWrapper">
          <div class="menu ui-widget-content" id="draggable">
            <div class="topbar gradient"> menu </div>
              <div id="menuItems">
                <OpenWindow 
                  id="henlo"
                  text="+ home (real)"
                  content={<Content.Welcome/>}
                  title="henlo"
                  className="menuItem"
                  /><p></p>

                <span class="menuItem" id="home_selector">+ home </span><p></p>
                <span class="menuItem" id="about_selector">+ about </span><br></br>
                <div id="about_submenu" class="submenu">
                  <span class="menuItem" id="edu">⤷ edu. </span><br></br>
                  <span class="menuItem" id="cv">⤷ CV </span><br></br>
                  <span class="menuItem" id="skills">⤷ skills </span><br></br>
                </div><p></p>
                <span class="menuItem" id="research_selector">+ research </span><p></p>
                <span class="menuItem" id="projects_selector">+ projects </span><br></br>
                <div id="projects_submenu" class="submenu">
                  <span class="menuItem" id="film_selector">⤷ film </span><br></br>
                  <span class="menuItem" id="photography_selector">⤷ photo </span><br></br>
                  <span class="menuItem" id="interactive_selector">⤷ 🤖 </span><br></br>
                  <span class="menuItem" id="photography_selector">⤷ comics </span><br></br>
                  <span class="menuItem" id="photography_selector">⤷ print </span><br></br>

                </div><p></p>
                <span class="menuItem" id="contact_selector">+ contact </span>
            </div>
          </div>


      <div>
      <OpenWindow 
        id="pooWindow"
        text="open poo window"
        content={<Content.PooWindow/>}
        title="poo window"
        />
        <br></br>
        <OpenWindow 
        id="henlo"
        text="open welcome window"
        content={<Content.Welcome/>}
        title="henlo"
        />
        <br></br>
        </div>

        </div>
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));