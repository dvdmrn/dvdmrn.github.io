

  $( function() {

  	$("#projects").toggle();

  	function openWindow(win){
  		if(win=="about") $( "#about" ).toggle("size", 200 );
  		if(win=="about") $( "#projects" ).toggle("size", 200 );

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
  		openWindow("about");
  	})

  

  } );