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
