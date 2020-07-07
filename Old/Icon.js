Fclass Icon {


	constructor(target,imgPath,name, windowPointer){
		this.id = target;
		this.window = windowPointer;
		this.doubleClick = false;
		console.log("name: ",this.id)
		var timeOut = setTimeout(()=>{},1000);

		$(".content").append(`<icon id='${this.id}' class='icon ui-widget-content'><img src='${imgPath}'><br><span>${name}</span></icon>`);
		$(`#${this.id}`).draggable();

		$(`#${this.id}`).click(()=>{
			if(this.doubleClick){
				this.window.toggleSelf();
				this.doubleClick = false;
			}
			else{
				clearTimeout(timeOut);
				this.doubleClick = true;
				// $(`#${this.id}`).toggleClass("highlight");
				timeOut = setTimeout(()=>{this.doubleClick=false},1000);
			}
		});



	}



	// openWindow(win, last){
 //  		$("#"+last).toggle("size", 200 );
 //  		$(`#${this.id}` ).toggle("size", 200 );}

 //  	toggle(subMenu){
 //  		console.log("called: ",subMenu)
 //  		$(`#${subMenu}`).toggle("blind",300);
 //  	}

 //  	addCloseButton(id){
 //  		$(`#${id}`).click(()=>{
	// 		$(`#${this.id}` ).toggle("size", 200 );  			
 //  		})
 //  	}



}