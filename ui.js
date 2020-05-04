var lastWindow = "home"

  $( function() {

  	$("#projects").toggle();
  	$("#contact").toggle();
  	$("#about").toggle();

  	// =========================================================================
  	// functions
  	// =========================================================================

  	function openWindow(win, last){
  		$("#"+last).toggle("size", 200 );
  		if(win=="about") {$( "#about" ).toggle("size", 200 );}
  		if(win=="projects") $( "#projects" ).toggle("size", 200 );
  		if(win=="contact") $( "#contact" ).toggle("size", 200 );
  		if(win=="home") $( "#contact" ).toggle("size", 200 );

  	}

  	// =========================================================================
  	// dragging events
  	// =========================================================================

  	// menu dragging -----------------------------------------------------------


  	$(".topbar").mousedown(()=>{
	    $( "#draggable" ).draggable({disabled:false});

  	})
  	$(".topbar").mouseup(()=>{
  		$( "#draggable" ).draggable({disabled:true});

  	});


  	// info dragging -----------------------------------------------------------

  	$(".aboutBar").mousedown(()=>{
	    $( "#about" ).draggable({disabled:false});

  	})
  	$(".aboutBar").mouseup(()=>{
  		$( "#about" ).draggable({disabled:true});

  	});

  	// home dragging -----------------------------------------------------------

  	$(".homeBar").mousedown(()=>{
	    $( "#home" ).draggable({disabled:false});

  	})
  	$(".homeBar").mouseup(()=>{
  		$( "#home" ).draggable({disabled:true});
  	});

  	// projects dragging -------------------------------------------------------

  	$(".projectsBar").mousedown(()=>{
	    $( "#projects" ).draggable({disabled:false});

  	})
  	$(".projectsBar").mouseup(()=>{
  		$( "#projects" ).draggable({disabled:true});
  	});

  	// contact dragging --------------------------------------------------------

  	$(".contactBar").mousedown(()=>{
	    $( "#contact" ).draggable({disabled:false});

  	})
  	$(".contactBar").mouseup(()=>{
  		$( "#contact" ).draggable({disabled:true});
  	});

  	// =========================================================================
  	// toggling windows 
  	// =========================================================================


  	$("#home_selector").click(()=>{
  		openWindow("home",lastWindow);
  		lastWindow = "home";
  	})

  	$("#about_selector").click(()=>{
  		openWindow("about",lastWindow);
  		lastWindow = "about";
  	})

  	$("#projects_selector").click(()=>{
  		openWindow("projects",lastWindow);
  		lastWindow = "projects";
  	})

  	$("#contact_selector").click(()=>{
  		openWindow("contact",lastWindow);
  		lastWindow = "contact";
  	})  

  } );