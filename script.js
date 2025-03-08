// Hide Header on Scroll Down
let prevScrollPos = window.pageYOffset;
const header = document.getElementById("header");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-80px"; // Adjust based on header height
  }
  prevScrollPos = currentScrollPos;
};

// Scroll to Projects Section
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Add Interactive Effects to Images
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transition = "transform 0.3s";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transition = "transform 0.3s";
  });
});