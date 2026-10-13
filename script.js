// Dark mode toggle
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
}

// Click counter
const counterBtn = document.getElementById("counterBtn");
if (counterBtn) {
  let count = 0;
  counterBtn.addEventListener("click", () => {
    count++;
    counterBtn.textContent = "Clicked " + count + " times";
  });
}

// Contact form (front-end only)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("formMsg").textContent =
      "Thanks " + document.getElementById("name").value + "! Message received ✅";
    form.reset();
  });
}
