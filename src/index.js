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
import * as Pet from './Pet.jsx'



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
                overrideStyle={{top:0,left:0}}
                />
            </div>
            <p>
            </p>

            <div onClick={ e=>this.setState({targetWindow:"about", targetDD:"about_DD"}) }>
              <W69.OpenWindow 
                id="about"
                text="+ about"
                content={<Content.About/>}
                title="about"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}

                />
            </div>
            <W69.DropDown
              id="about_DD"
              target={this.state.targetDD}
            >
                <div onClick={ e=>this.setState({targetWindow:"edu"}) }>
                  <W69.OpenWindow 
                    id="edu"
                    text="⤷ edu."
                    content={<Content.About_Education/>}
                    title="education"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    />
                </div>
                <div onClick={ e=>this.setState({targetWindow:"cv"}) }>
                  <W69.OpenWindow 
                    id="cv"
                    text="⤷ cv"
                    content={<Content.About_Education/>}
                    title="cv"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}

                    />
                </div>
                <div onClick={ e=>this.setState({targetWindow:"skills"}) }>
                  <W69.OpenWindow 
                    id="skills"
                    text="⤷ skills"
                    content={<Content.About_Skills/>}
                    title="skills"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    />
                </div>          
            </W69.DropDown>
            <p></p>
            <div onClick={ e=>this.setState({targetWindow:"research",targetDD:null}) }>
              <W69.OpenWindow 
                id="research"
                text="+ research"
                content={<Content.Research/>}
                title="research"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}

                />
            </div>

            <p></p>

            <div onClick={ e=>this.setState({targetWindow:"projects", targetDD:"projects_DD"}) }>
              <W69.OpenWindow 
                id="projects"
                text="+ projects"
                content={null}
                title="projects"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}

                />
            </div>

            <W69.DropDown
              id="projects_DD"
              target={this.state.targetDD}
            >
              <div onClick={ e=>this.setState({targetWindow:"film"}) }>
                  <W69.OpenWindow 
                    id="film"
                    text="⤷ film"
                    content={<Content.Projects_Film/>}
                    title="film"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}
                    />
              </div> 

              <div onClick={ e=>this.setState({targetWindow:"photos"}) }>
                  <W69.OpenWindow 
                    id="photos"
                    text="⤷ photos"
                    content={<Content.PooWindow/>}
                    title="photos"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}

                    />
              </div>

              <div onClick={ e=>this.setState({targetWindow:"interactive"}) }>
                  <W69.OpenWindow 
                    id="interactive"
                    text="⤷ 🤖"
                    content={<Content.Projects_Interactive/>}
                    title="interactive"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}

                    />
              </div>              

              <div onClick={ e=>this.setState({targetWindow:"comics"}) }>
                  <W69.OpenWindow 
                    id="comics"
                    text="⤷ comics"
                    content={<Content.PooWindow/>}
                    title="comics"
                    targetWindow={this.state.targetWindow}
                    overrideStyle={{top:0,left:0}}

                    />
              </div>

            </W69.DropDown>
            <p/>
             <div onClick={ e=>this.setState({targetWindow:"contact",targetDD:null}) }>
              <W69.OpenWindow 
                id="contact"
                text="+ contact"
                content={<Content.Contact/>}
                title="contact"
                targetWindow={this.state.targetWindow}
                overrideStyle={{top:0,left:0}}
                
                />
            </div>



          </div>
        </div>
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

        windowId="PetWindow" 
        content={<Pet.Pet/>}
        title="virtual pet"
        />
      )
  }
}


class App extends Component{

  render() {
    // const {isVisible} = this.state;
      {console.log(window.screen.width/window.screen.height)}
    return (

      <div className="content">
        <Desktop/>
        <div id="LeftWrapper">
          <Menu/>

        </div>
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));