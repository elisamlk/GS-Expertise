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

$(".img-bl").hover(
  function () {
    $(this).attr(
      "src",
      "img/photo-accueil-header-equipe-cabinet-gsexpertise.png"
    );
  },
  function () {
    $(this).attr("src", "img/accueil.png");
  }
);

$(".img-col").hover(
  function () {
    $(this).attr("src", "img/photo-accueil-cabinet-meeting-couleur.png");
  },
  function () {
    $(this).attr("src", "img/photo-accueil-cabinet-meeting.png");
  }
);
