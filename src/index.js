import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './style/desktop.css';
// import './style/loader.css';
// // import './style/menu.css';
// import './style/rootstyle.css';
import './style/style.css';
// import './style/windowstyle.css';
// import './style/wireframe.css';


import * as W69 from './Windows69.jsx';
import * as Content from './content.jsx';




class Menu extends Component{
  constructor(props){
    super(props)
    this.state = {lastWindow:"home", targetWindow:"x", targetDD:"x"};
    this.closeLastWindow = this.closeLastWindow.bind(this);
  }
  // TODO: Meny will handle state control flow for opening menu items
  // so that windows are mutually exclusive

  closeLastWindow(){
    console.log(`last window: ${this.state.lastWindow}`);
  }
  render(){
    return(
       <div className="menu ui-widget-content" id="draggable">
          <div className="topbar gradient"> menu </div>
          <div id="menuItems">

            <div onClick={ e=>this.setState({targetWindow:"home",targetDD:null}) }>
              <W69.OpenWindow 
                id="home"
                text="+ home"
                content={<Content.Welcome/>}
                title="home"
                targetWindow={this.state.targetWindow}
                />
            </div>
            <p>
            </p>
            <div onClick={ e=>this.setState({targetWindow:"poo",targetDD:null}) }>
              <W69.OpenWindow 
                id="poo"
                text="+ poo window"
                content={<Content.PooWindow/>}
                title="poo window"
                targetWindow={this.state.targetWindow}
                />
            </div>

            <p>
            </p>
            <div onClick={ e=>this.setState({targetWindow:"about", targetDD:"about_DD"}) }>
              <W69.OpenWindow 
                id="about"
                text="+ about"
                content={<Content.PooWindow/>}
                title="about"
                targetWindow={this.state.targetWindow}
                />
            </div>
            <W69.DropDown
              id="about_DD"
              target={this.state.targetDD}
              onClick={true}
            >
            // edu. cv. skills
            ⤷
            <div onClick={ e=>this.setState({targetWindow:"edu"}) }>
              <W69.OpenWindow 
                id="edu"
                text="⤷ edu."
                content={<Content.About_Education/>}
                title="education"
                targetWindow={this.state.targetWindow}
                />
            </div>
            <br></br>
            ⤷aaaaiiieee<br></br>
            </W69.DropDown>


          </div>
        </div>
      )

  }
}


class App extends Component{

  render() {
    // const {isVisible} = this.state;
    return (

      <div className="content">
        <div id="LeftWrapper">
          <Menu/>

        </div>
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));