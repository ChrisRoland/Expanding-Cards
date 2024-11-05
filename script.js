$(function () {
  $(".panel").on("click", function () {
    $(".panel").removeClass("active");
    $(this).addClass("active");
  });
});

//OR

document.querySelectorAll(".panel").forEach(panel => {
    panel.addEventListener("click", function() {
   $(".panel").removeClass("active");
        this.classList.add("active");
    });
});
