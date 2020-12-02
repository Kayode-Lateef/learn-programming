$(document).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
      $("#banner").addClass("shrink");
    } else {
      $("#banner").removeClass("shrink");
    }
  });
  
  
  
  // $(document).on("scroll", function () {
  //   if ($(document).scrollTop() > 
  //   20) {
  //     $(".about").addClass("shrink");
  //   } else {
  //     $(".about").removeClass("shrink");
  //   }
  // });
  
  