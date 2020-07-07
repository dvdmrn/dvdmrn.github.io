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
	  	this.setState({speaking:true})
		this.setState({text:""},e=>this.typeWriter("> I'm full, please stop feeding me...",0))
		this.setState({hunger:this.state.hunger+1})

		let ow = new Test("hello");
 		ow.sayOwie();
	}
}
pet(){
	if(!this.state.speaking){
		this.setState({speaking:true})
		this.setState({text:""},e=>this.typeWriter("> haha, that feels nice!",0))
	}
}
talk(){
	if(!this.state.speaking){
		this.setState({speaking:true})
		this.setState({text:""},e=>this.typeWriter("> Thanks for talking to me. It's nice to have someone to speak to :)",0))
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