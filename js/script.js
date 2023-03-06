$(".handle").on("click", function () {
    console.log("ok");
    $("header").toggleClass("mobile-device");
    if ($("header").hasClass("mobile-device")) {
      $("nav").addClass("showing");
      $("i").removeClass("fa-solid fa-bars");
      $("i").addClass("fa-solid fa-xmark");
    } else {
      $("i").removeClass("fa-solid fa-xmark");
      $("i").addClass("fa-solid fa-bars");
      $("nav").removeClass("showing");
    }
  });