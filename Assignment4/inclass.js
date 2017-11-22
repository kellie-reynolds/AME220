var data_y;

var dialogLib = {
  alert:{
    _CB: function(){},
    _bClicked: function(){
      _CB();
      $(".wrapper").remove();
    },
    show: function(msg, label, callback){
      _CB = callback = callback || function(){};
      label = label || "OK";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<button onclick='dialogLib.alert._bClicked()'>" + label + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
    }
  },

  confirm:{
    _yesClicked: function(){
      _yCB();
      dialogLib.confirm.hide();  
    },
    _noClicked: function(){
      _nCB();
      dialogLib.confirm.hide();  
    },
    _yCB: function(){},
    _nCB: function(){},
    show: function(msg, yesLabel, noLabel, yesCB, noCB){
      yesLabel = yesLabel || "OK";
      noLabel = noLabel || "Cancel";
      _yCB = yesCB = yesCB || function(){};
      _nCB = noCB = noCB || function(){};

      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<button onclick='dialogLib.confirm._noClicked()'>" + noLabel + "</button>"+
            "<button onclick='dialogLib.confirm._yesClicked()'>" + yesLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
    },
    hide: function(){
      $(".wrapper").remove();
    }
  },

  prompt:{
    _yCB: function(){},
    _nCB: function(){},
    _yesClicked: function(){
      var val = $(".wrapper .frame .userInput").val();
      _yCB(val);
      $(".wrapper").remove();
    },
    _noClicked: function(){
      var val = $(".wrapper .frame .userInput").val();
      _nCB(val);
      $(".wrapper").remove();
    },
    _handleKD: function(e){
	var key = e.key.toLowerCase();
	if(key == "escape"){
	   dialogLib.prompt._noClicked();
	}
	else if(key == "enter"){
	   dialogLib.prompt._yesClicked();
	}
    },

    show: function(msg, yesLabel, noLabel, yesCB, noCB){
      yesLabel = yesLabel || "OK";
      noLabel = noLabel || "Cancel";
      _yCB = yesCB = yesCB || function(){};
      _nCB = noCB = noCB || function(){};
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<input onkeydown='dialogLib.prompt._handleKD(event)' type='text' class='userInput'/>"+
            "<button onclick='dialogLib.prompt._noClicked()'>" + noLabel + "</button>"+
            "<button onclick='dialogLib.prompt._yesClicked()'>" + yesLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
      $(".wrapper .frame .userInput").focus();
    }
  }
}