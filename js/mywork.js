let main = function() {
  //========== START OF NAVBAR ============//
  $("#navicon").click(function() {
    $(".nav").css({
      transform: "translateX(0)"
    });
  });

  $(".nav").click(function() {
    $(".nav").css({
      transform: "translateX(-200px)"
    });
  });

  $("#container").click(function() {
    $(".nav").css({
      transform: "translateX(-200px)"
    });
    _exit();
  });

  function _exit() {
    $(".nav").css({
      transform: "translateX(-200px)"
    });
  }
  //========== END OF NAVBAR ============//

  //========== START OF TO-TOP ============//
  $("button").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "slow"
    );
  });
  //========== END OF TO-TOP ============//
};

$(document).ready(main);


