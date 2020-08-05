class Popup {
	// a popup window

	constructor(selector, htmlPath){
		this.name = selector;
    this.htmlPath = htmlPath;
    this.popup = false;
    this.closeButton = false;

    console.log("close button val: ",this.closeButton)



	  // menu click events ---------------------------------------------------
		$(`#${this.name}_selector`).click(()=>{
        if(this.popup != true){
	  		  this.popUp(this.htmlPath);
          this.popup = true;
        }
	  	})
	}

  popUp(htmlPath){
    console.log("popup called");
    // make a new poopupp
        console.log("close button val IN POPUP: ",this.closeButton)


        $(`#loader`).toggle("fade",150);
        $('.content').append(`<div class="GenericWindow" id="${this.name}"></div>`)
        $(`#${this.name}`).append(`<div class="contentTopBar ${this.name}Bar">TESSSTYY</div>`)
        if(!this.closeButton) {this.addCloseButton()};
        $(`#${this.name}`).append(`<div class="ContentWindowContent"></div>`);

            $(`#${this.name}`).toggle(0,()=>{
              $(`#${this.name} > .ContentWindowContent`).load(htmlPath, ()=>{

                $(`#loader`).toggle("fade",150);
                $(`#${this.name}`).toggle("size",200);
              })
            })

    // dragging events -----------------------------------------------------

    $(`.${this.name}Bar`).mousedown(()=>{
      $( `#${this.name}` ).draggable({disabled:false});
        })
      $(`.${this.name}Bar`).mouseup(()=>{
      $( `#${this.name}` ).draggable({disabled:true});
        });
    }


  hello(){
    alert("hi");
  }

  // addCloseButton(id){
  //     console.log(`called addCloseButton with ${id}, attempting to select`);
  //     console.log($(`.${id}Bar`));
  //     console.log(`${id}Bar`);

  //     $(`.${id}Bar`).append(`<span class="close" id="${id}_close">x</span>`)
  //     $(`#${id}_close`).click(()=>{
  //     $(`#${this.name}` ).toggle("size", 200 );       
  //     })
  //   }


  	addCloseButton(){
      this.closeButton = true;
      console.log("add close button called!");
      $(`.${this.name}Bar`).append(`<span class="close" id="${this.name}_close">x</span>`)
  		$(`#${this.name}_close`).click(()=>{
        this.popup = false;
			  $(`#${this.name}`).toggle("size", 200 );  			
  		})
  	}


}