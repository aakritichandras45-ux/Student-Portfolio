// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

console.log("Student Portfolio Website Loaded Successfully!");
