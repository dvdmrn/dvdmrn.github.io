class Window {
	// class that represents a window
	// linked to a selector item on the menu

	constructor(target, subMenu){
		this.name = target;
		this.subMenu = subMenu;
	  	// dragging events -----------------------------------------------------

		$(`.${this.name}Bar`).mousedown(()=>{
	    $( `#${this.name}` ).draggable({disabled:false});
  			})
	  	$(`.${this.name}Bar`).mouseup(()=>{
  		$( `#${this.name}` ).draggable({disabled:true});
  			});

	  	// menu click events ---------------------------------------------------

		$(`#${this.name}_selector`).click(()=>{
			console.log("clicked");
	  		this.openWindow(this.name,lastWindow);
	  		lastWindow = this.name;



  			for(const subMenu in subMenus){
  				if(subMenus[subMenu] && (subMenu != this.subMenu)){
  					this.toggle(subMenu);
  					subMenus[subMenu] = false;
  				}
  			}
	  		if(this.subMenu){

	  			console.log("got here")
	  			this.toggle(this.subMenu)
	  			subMenus[this.subMenu] = !subMenus[this.subMenu];



	  		}
	  	})

	}

	openWindow(win, last){
  		$("#"+last).toggle("size", 200 );
  		$(`#${this.name}` ).toggle("size", 200 );}

  	toggle(subMenu){
  		console.log("called: ",subMenu)
  		$(`#${subMenu}`).toggle("blind",300);
  	}

  	addCloseButton(id){

      $(`.${id}Bar`).append(`<span class="close" id="${id}_close">x</span>`)
  		$(`#${id}_close`).click(()=>{
			$(`#${this.name}` ).toggle("size", 200 );  			
  		})
  	}

  	toggleSelf(){
  		// WARNING: intended for side windows
  		// will not affect main list globals

  		$(`#${this.name}` ).toggle("size", 200 );
  	}


  	addSubmenu(subMenu_selector, HTMLcontent){
  		let oldHTML = $(`#${this.name} > .ContentWindowContent`).html();

  		$(`#${subMenu_selector}`).click(()=>{
  			$(`#${this.name} > .ContentWindowContent`).toggle("fold",200,()=>{
  				$(`#loader`).toggle("fade",150);
  				$(`#${this.name} > .ContentWindowContent`).load(HTMLcontent, ()=>{
  					$(`#loader`).toggle("fade",150);
  					$(`#${this.name} > .ContentWindowContent`).toggle("fold",200);
  				});
  				
  			})
  		})

  		$(`#${this.name}_selector`).click(()=>{
  			$(`#${this.name} > .ContentWindowContent`).html(oldHTML);
  		})
  	}
}