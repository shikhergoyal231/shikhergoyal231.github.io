
$(".email-signup").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});



function validate(){
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("firstname").disabled = true;
document.getElementById("lastname").disabled = true;
document.getElementById("Sign Up").disabled = true;
return false;
}
}
}


$.ajax(
{
url: "https://reqres.in/api/users?per_page=10",
method: "get",
dataType: "json"
}).done(function(res){
  res.data.map((item)=>
  {
    console.log(item.firstname + " "+ item.lastname)
  });
});;
