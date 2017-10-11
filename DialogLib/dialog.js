var dialogLib = {
  alert:{
    show: function(msg){
		var addedHTML = "";
		
		addedHTML = "<div class='wrapper'>" +
			"<div class='frame'>" +
				"<h1>" + msg + "</h1>"
			"</div>" +
			"</div>";
		
		$("body").append(addedHTML);
			
    },
    hide: function(){
		
    }
  }
}