var lastWindow = "home"
var subMenus = {
  "projects_submenu":false,
  "about_submenu":false
}


  $( function() {

    $("#loader").toggle();


  	$("#projects").toggle();
    $("#research").toggle();
  	$("#contact").toggle();
  	$("#about").toggle();

    $("#projects_submenu").toggle();
    $("#about_submenu").toggle();
  	// =========================================================================
  	// functions
  	// =========================================================================

  	// menu dragging -----------------------------------------------------------


  	$(".topbar").mousedown(()=>{
	    $( "#draggable" ).draggable({disabled:false});

  	})
  	$(".topbar").mouseup(()=>{
  		$( "#draggable" ).draggable({disabled:true});

  	});


    // window creation ---------------------------------------------------------
    let home = new Window("home");
    let about = new Window("about","about_submenu");
    about.addSubmenu("edu", "submenu/edu.html");
    about.addSubmenu("cv","submenu/cv.html");

    let research = new Window("research");
    let projects = new Window("projects","projects_submenu");
    let contact = new Window("contact");

    let pet = new Window("pet");
    pet.addCloseButton("pet_close");


    // icon creation ------------------------------------------------------------
    // trash = new Icon("trash","img/trash.png");
    petIcon = new Icon("petIcon","img/bonzai.png","pet.exe",pet);

  } );