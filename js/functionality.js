var optionSelected = false;

function sendEmail() {
  var name = $("#contactName").val();
  var email = $("#contactEmail").val();
  var message = $("#contactMessage").val();
  var link = "mailto:mostly_mike@hotmail.com"
             + "?subject=" + encodeURIComponent("Contact Form Response")
             + "&body=" + encodeURIComponent(message+"\n\nFrom:\n"+name+"\n"+email);
  window.location.href = link;
}




var currentCount = 0;

var blinkTitle = function() {
    var mainTitle = $('#mainTitle');
    
    currentCount = (currentCount+1)%2;
    if (currentCount == 0) {
        mainTitle.html("<FONT COLOR=\"f37b1d\">~</FONT><FONT COLOR=\"00f943\">$</FONT> Michael Clayton<FONT COLOR=\"ffffff\"> |</FONT>");
    } else {
        mainTitle.html("<FONT COLOR=\"f37b1d\">~</FONT><FONT COLOR=\"00f943\">$</FONT> Michael Clayton<FONT COLOR=\"00f943\"> |</FONT>");
    }
};

// setTimeout Example
var loopTitleBlink = function() {
    blinkTitle();
    setTimeout(loopTitleBlink, 700);
};


window.onload = function(){
    $('#mainTitle').html("HI");
    loopTitleBlink();
};