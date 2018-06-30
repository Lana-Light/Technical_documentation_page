$(document).ready(function() {
  var ind = ["red", "none"];
  $(window).resize(function() {
    window.innerWidth > 768
      ? (ind = ["blue", "block"])
      : (ind = ["red", "none"]);
    $(".menu").css("color", ind[0]);
    $(".nav-link").css("display", ind[1]);
  });
  $(".menu").click(function() {
    if (window.innerWidth < 769) {
      ind[0] == "red" ? (ind = ["blue", "block"]) : (ind = ["red", "none"]);
      $(".menu").css("color", ind[0]);
      $(".nav-link").css("display", ind[1]);
    }
  });
});
