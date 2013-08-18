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

function setSpeechBubbleText() {
   if (!optionSelected) {
   var speechValue = $("#speechValue").val();
   
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     if (speechValue === "resume")
       $("#speechBubbleText").html("Thanks for viewing my résumé!");
    else if (speechValue === "contact")
       $("#speechBubbleText").html("I'd love to hear from you!");
    else if (speechValue === "about")
       $("#speechBubbleText").html("Enjoying your visit so far?<br><a class=\"btn btn-success btn-small\" onclick=\"selectYes()\">Yes</a><a class=\"btn btn-danger btn-small\" onclick=\"selectNo()\">No</a>");
    else if (speechValue === "portfolio")
      $("#speechBubbleText").html("These are just a select few of my projects,<br>and I am always working on more!");
   } else {
     $("#speechBubbleText").html("...<br>");
   }
   }
}

function selectYes() {
  optionSelected = true;
  $("#speechBubbleText").html("That's Fantastic! I hope you<br>find the remainder enjoyable as well!");
}

function selectNo() {
  optionSelected = true;
  $("#speechBubbleText").html("Sorry to hear that. Please let me know why!<br><a href=\"contact.html\" class=\"btn btn-info btn-small\">Contact</a>");
}

$(document).scroll(function(e) {
  setSpeechBubbleText();
});