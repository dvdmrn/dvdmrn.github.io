class Window {
	// class that represents a window
	// linked to a selector item on the menu

	constructor(target){
		this.name = target;

	  	// dragging events -----------------------------------------------------

		$(`.${this.name}Bar`).mousedown(()=>{
	    $( `#${this.name}` ).draggable({disabled:false});
  			})
	  	$(`.${this.name}Bar`).mouseup(()=>{
  		$( `#${this.name}` ).draggable({disabled:true});
  			});

	  	// menu click events ---------------------------------------------------

		$(`#${this.name}_selector`).click(()=>{
	  		this.openWindow(this.name,lastWindow);
	  		lastWindow = this.name;
	  	})

	}

	openWindow(win, last){
  		$("#"+last).toggle("size", 200 );
  		$(`#${this.name}` ).toggle("size", 200 );}

}