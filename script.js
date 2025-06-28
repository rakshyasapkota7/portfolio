const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

document.getElementById("nav-home").addEventListener("click", () => {
  homeSection.style.display = "block";
  aboutSection.style.display = "none";
  contactSection.style.display = "none";
});

document.getElementById("nav-about").addEventListener("click", () => {
  homeSection.style.display = "none";
  aboutSection.style.display = "block";
  contactSection.style.display = "none";
});

document.getElementById("nav-contact").addEventListener("click", () => {
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  contactSection.style.display = "block";
});
