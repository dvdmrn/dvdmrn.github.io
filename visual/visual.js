import { Component } from "../components/badframework.js";

class FilmCard extends HTMLElement{
    constructor(){
        super();

        
        // this.container = Component("div", "visual-item anim-slide-in");
        // this.titleCard = Component("div", "visual-item-top-info");
        
        // /**
        //  * @type {HTMLSlotElement}
        //  */
        // this.videoSlot = document.createElement("slot");
        // this.videoSlot.name = "video-area"
        // this.container.appendChild(this.titleCard);
        // this.container.appendChild(this.videoSlot);
        // this.appendChild(this.container);
        
    }

    static get observedAttributes(){
        return ["client", "role"];
    }

    connectedCallback(){
        // this.render();

        this.innerHTML = `
        <div>
        <b>hello slot below</b>
        <p></p>
          <slot name="video-area"></slot>
        </div>
      `;
    }

    // render(){
    //     const client = this.getAttribute("client");
    //     const role = this.getAttribute("role");
    //     this.titleCard.innerHTML = `
    //         <b>Client</b>: ${client}<br/>
    //         <b>Role</b>: ${role}<br/>
    //     `
    // }
}

customElements.define('film-card', FilmCard);


class SlotOne extends HTMLElement {

	constructor() {

		super();

		const shadow = this.attachShadow({mode:'open'});

		const div = document.createElement('div');
        div.classList.add("card-decoration")
		div.innerHTML = `
    <h1>I'm a header</h1>
    <p>Here's my slot: <slot name="testslot">default</slot></p>
    <h2>I'm a footer.</h2>
`;


		shadow.appendChild(div);
	}


}

customElements.define('slot-one', SlotOne);