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

$.ajax({
    url: "https://reqres.in/api/users",
    data: {},
    beforeSend: function(){}
}).done(function(response) {
    var trArr = new Array();
    $.each(response.data, function(i, v){
    	trArr.push('<tr><td>' + v.id + '</td><td>' + v.first_name + '</td><td>' + v.last_name + '</td><td><img src="' + v.avatar + '" width="120px" /></td></tr>');
    });
    $('table#alk-table tbody').append(trArr.join('\n'));
});

