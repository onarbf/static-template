$( document ).ready(function() {
  $('.hide').hide();
  $('.content-0').fadeIn(4000);

  $("#menu-1").click(function() {
    changeBackgroundColor("yellow","#menu-1",".content-1");
  });

  $("#menu-2").click(function() {
    changeBackgroundColor("blue","#menu-2",".content-2");
  });

  $("#menu-3").click(function() {
    changeBackgroundColor("green","#menu-3",".content-3");
  });

  $("#menu-4").click(function() {
    changeBackgroundColor("#323232","#menu-4",".content-4");
  });
});

var menuOptions = ["Radicales","Psique","Sostenibles","Brecha"];
var activeMenu = "";
function test(){
  alert('test');
};

function changeBackgroundColor(color, menuOption,contentOption){
  if (activeMenu === $(menuOption).text()) {
    $("body").animate({backgroundColor: "black"}, 'slow');
    activeMenu = "";
    $(".content-0").fadeIn(1000)
    $(".content-1").hide()
    $(".content-2").hide()
    $(".content-3").hide()
    $(".content-4").hide()
  }else{
    $("body").animate({backgroundColor: color}, 'slow');
    activeMenu = $(menuOption).text();
    $(".content-0").hide()
    $(".content-1").hide()
    $(".content-2").hide()
    $(".content-3").hide()
    $(".content-4").hide()
    $(contentOption).fadeIn(1000)
  }
}
