var lastWindow = "about"

  $( function() {

  	$("#projects").toggle();
  	$("#contact").toggle();

  	function openWindow(win, last){
  		$("#"+last).toggle("size", 200 );
  		if(win=="about") {$( "#about" ).toggle("size", 200 );}
  		if(win=="projects") $( "#projects" ).toggle("size", 200 );
  		if(win=="contact") $( "#contact" ).toggle("size", 200 );
  	}


  	// menu dragging -----------------------------------------------------------


  	$(".topbar").mousedown(()=>{
	    $( "#draggable" ).draggable({disabled:false});

  	})
  	$(".topbar").mouseup(()=>{
  		$( "#draggable" ).draggable({disabled:true});

  	});


  	// info dragging -----------------------------------------------------------

  	$(".header").mousedown(()=>{
	    $( "#about" ).draggable({disabled:false});

  	})
  	$(".header").mouseup(()=>{
  		$( "#about" ).draggable({disabled:true});

  	});


  	// toggling windows --------------------------------------------------------

  	$("#about_selector").click(()=>{
  		console.log("clicked");
  		openWindow("about",lastWindow);
  		lastWindow = "about";
  	})

  	$("#projects_selector").click(()=>{
  		console.log("clicked");
  		openWindow("projects",lastWindow);
  		lastWindow = "projects";
  	})

  	$("#contact_selector").click(()=>{
  		console.log("clicked");
  		openWindow("contact",lastWindow);
  		lastWindow = "contact";
  	})  

  } );