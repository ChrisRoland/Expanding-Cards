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

//OR

const panels = document.querySelectorAll(".panel")

function removeClass() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeClass()
        panel.classList.add("active")
    })
})