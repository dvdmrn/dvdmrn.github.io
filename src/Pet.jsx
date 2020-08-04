import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Test{
	constructor(x){
		this.x = x
	}

	sayOwie(){
		alert("owie"+this.x)
	}
}



class Pet extends Component{

constructor(props){
    super(props)
    this.state = {hunger:5,
    			  love:5,
    			  text:"> Heya My name's Hen, the human pet! 💖",
    			  speaking:false
    			  }
    this.feed.bind(this);
    this.typeWriter.bind(this);
  }

 componentDidMount(){
 	if(this.props.visible){

 	}
 }

feed(){
	if(!this.state.speaking){
		if(this.state.hunger > 7){
		  	this.setState({speaking:true})
			this.setState({text:""},e=>this.typeWriter("> I'm full!",0))			
		}
		else{
		  	this.setState({speaking:true})
			this.setState({text:""},e=>this.typeWriter("> yum!",0))
			this.setState({hunger:this.state.hunger+1})
		}


	}
}
pet(){
	if(!this.state.speaking){
		this.setState({speaking:true})
		this.setState({text:""},e=>this.typeWriter("> *purrs*",0))
	}
}
talk(){
	if(!this.state.speaking){
		this.setState({speaking:true})
		this.setState({text:""},e=>this.typeWriter("> This website highlights a few things David has done, have fun exploring!",0))
	}
}

typeWriter(txt,i,speed=50) {
  if(i==txt.length){
  	this.setState({speaking:false})
  	return
  }
  else{
	  this.setState({text:this.state.text+txt.charAt(i)})
	
	  setTimeout(()=>this.typeWriter(txt,i+1,speed),speed);

  }

}

render(){
	return(
<div className="">
	<div class="petText">{this.state.text}</div>
	<div class="petDisplay"><center>
	<img src={require("./img/pet.gif")}/>
	</center></div>

	<div className="petControls">
		<div className="petUIbutton"
			onClick={()=>this.feed()}>
			feed</div> 
		<div className="petUIbutton"
			onClick={()=>this.pet()}>
			pet</div>
		<div className="petUIbutton"
			onClick={()=>this.talk()}>
			talk</div>
	</div>
</div>

		)

	}
}

export {Pet}