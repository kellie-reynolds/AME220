var dialogLib = {
  alert:{
    show: function(msg, label){
		var addedHTML = "";
		label = label || "OK";
		
		addedHTML = "<div class='wrapper'>" +
			"<div class='frame'>" +
				"<h1>" + msg + "</h1>"
				"<button onClick='dialogLib.alerg.hide()'>" + label + "</button>"+
			"</div>" +
			"</div>";
		
		$("body").append(addedHTML);
			
    },
    hide: function(){
		
    }
  }
}