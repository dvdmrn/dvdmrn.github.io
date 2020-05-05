var lastWindow = "home"

  $( function() {

  	$("#projects").toggle();
    $("#research").toggle();
  	$("#contact").toggle();
  	$("#about").toggle();

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


    let home = new Window("home");
    let about = new Window("about");
    let research = new Window("research");
    let projects = new Window("projects");
    let contact = new Window("contact");
    let pet = new Window("pet");


  } );