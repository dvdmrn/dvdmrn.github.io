var lastWindow = "home"
var subMenus = {
  "projects_submenu":false,
  "about_submenu":false
}


  $( function() {

    $("#accordion").accordion();

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
    about.addSubmenu("skills","submenu/skills.html");


    let research = new Window("research");
    let projects = new Window("projects","projects_submenu");
    projects.addSubmenu("film_selector","submenu/film.html");
    projects.addSubmenu("photos_selector","submenu/interactive_modules/film.html");
    projects.addSubmenu("interactive_selector","submenu/interactive.html");

    

    let contact = new Window("contact");

    let pet = new Window("pet");
    pet.addCloseButton("pet");


    
    



    // icon creation ------------------------------------------------------------
    // trash = new Icon("trash","img/trash.png");
    petIcon = new Icon("petIcon","img/bonzai.png","pet.exe",pet);


    // ---------------------------------------------------------------------------
   

  } );