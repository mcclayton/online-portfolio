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