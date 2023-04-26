var links = document.querySelectorAll(".nav_link");
const height = screen.height;
const width = screen.width;
function navHandler() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  this.classList.add("active");
}
links.forEach((link) => {
  link.addEventListener("click", navHandler);
});
const navbar = document.getElementById("navbar");
const about = document.getElementById("about");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  const about_top = about.getBoundingClientRect().top;
  console.log(about_top, height);
  navbar.style.background =
    about_top > 0
      ? "transparent"
      : "linear-gradient(45deg, #e9bcff, #b4c4cf, #d4aeff)";
  links.forEach((link) => {
    link.style.color = about_top > 0 ? "#fff" : "#000";
  });

  //   const about_body = document.getElementById("about_body");
  //   about_body.style.gap = "0";
  //   about_body.style.gap = about_top <= 370 && about_top >= -50 ? `0` : "300px";
}
