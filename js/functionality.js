var optionSelected = false;

function sendEmail() {
  var name = $("#contactName").val();
  var email = $("#contactEmail").val();
  var message = $("#contactMessage").val();
  var link = "mailto:michaelcclayton@outlook.com"
             + "?subject=" + encodeURIComponent("Contact Form Response")
             + "&body=" + encodeURIComponent(message+"\n\nFrom:\n"+name+"\n"+email);
  window.location.href = link;
}


/*
 * TITLE FUNCTIONS
 */
var currentCount = 0;
var blinkTitle = function(target, titleText) {    
    currentCount = (currentCount+1)%2;
    if (currentCount == 0) {
        $(target).html("> "+titleText+"<FONT COLOR=\"ffffff\">_</FONT>");
    } else {
        $(target).html("> "+titleText+"_");
    }
};

// setTimeout Example
var loopTitleBlink = function(target, titleText) {
    blinkTitle(target, titleText);

    setTimeout(function() {
      loopTitleBlink(target, titleText);
    }, 700);
};

var showText = function (target, titleText, index, interval) {    
  $(target).html("> ");
  var modText = titleText+"_";

  if (index < modText.length) { 
    for (var i=0; i<modText.length; i++) {
      if (i<index) {
        $(target).append(modText[i]);
      } else if (i == index) {
        $(target).append("_");
      } else {
        $(target).append("<FONT COLOR=\"ffffff\">"+modText[i-1]+"</FONT>");
      }
    }
    index++;
    setTimeout(function () { showText(target, titleText, index, interval); }, interval); 
  } else {
    loopTitleBlink(target, titleText);
  } 
};

window.onload = function(){
  showText("#mainTitle", "Michael Clayton", 0, 75);
};
