var links = document.querySelectorAll(".nav_link");
const height = screen.height;
const width = screen.width;
const navbar = document.getElementById("navbar");
const home = document.getElementById("home");
const about = document.getElementById("about");
const donate = document.getElementById("donate");
const contact = document.getElementById("contact");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  const about_top = about.getBoundingClientRect().top;

  const home_bottom = home.getBoundingClientRect().bottom;
  const about_bottom = about.getBoundingClientRect().bottom;
  const donate_bottom = donate.getBoundingClientRect().bottom;
  const contact_bottom = contact.getBoundingClientRect().bottom;
  navbar.style.background =
    about_top > 0
      ? "transparent"
      : "linear-gradient(45deg, #e9bcff, #b4c4cf, #d4aeff)";
  const inner_width = window.innerWidth;
  links.forEach((link) => {
    link.style.color =
      inner_width <= 420 ? "#fff" : about_top > 0 ? "#fff" : "#000";
  });
  console.log(links);
  if (home_bottom > 0)
    inner_width <= 420
      ? (links[0].style.color = "#ffff00")
      : navClassScrollHandler(links[0]);
  else if (about_bottom > 0)
    inner_width <= 420
      ? (links[1].style.color = "#ffff00")
      : navClassScrollHandler(links[1]);
  else if (donate_bottom > 0)
    inner_width <= 420
      ? (links[2].style.color = "#ffff00")
      : navClassScrollHandler(links[2]);
  else if (contact_bottom > 0)
    inner_width <= 420
      ? (links[3].style.color = "#ffff00")
      : navClassScrollHandler(links[3]);
}

function navClassScrollHandler(curr_link) {
  links.forEach((n) => n.classList.remove("active"));
  curr_link.classList.add("active");
}

//Hamburger drawer
let linkVisible = true;
const link_drawer = document.getElementById("link_menu");
link_drawer.addEventListener("click", linkDrawer);

function linkDrawer() {
  const links = document.getElementById("nav_links");
  console.log("hello");
  linkVisible = !linkVisible;
  links.style.display = linkVisible ? "none" : "flex";
  const menu_drawer = document.getElementById("drawer_icon");
  if (!linkVisible) {
    menu_drawer.classList.remove("fa-bars");
    menu_drawer.classList.add("fa-xmark");
  } else {
    menu_drawer.classList.remove("fa-xmark");
    menu_drawer.classList.add("fa-bars");
  }
}
window.addEventListener("resize", function () {
  links.forEach((n) => (n.style.color = "#fff"));
  document.getElementById("nav_links").style.display =
    window.innerWidth >= 420 ? "flex" : linkVisible ? "none" : "flex";
});

// scroll reveal --------
const srtop = ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
const srside = ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 2000,
  delay: 200,
});

srtop.reveal(".page_header, .home_text h1", { origin: "top" });
srtop.reveal(".home_text .donate_btn", { origin: "bottom" });
srtop.reveal(".logo", { origin: "left" });
srside.reveal("#about .page_image, #donate .page_text, #contact .page_text", {
  origin: "left",
});
// srside.reveal(".donate_image, #about .page_text, #contact .page_image", {
// origin: "right",
// });
