document.addEventListener("DOMContentLoaded", function () {
  alert("Halo, selamat datang di halaman data diri Alfiyana Fadillah Ashary!");

  // Hover effect pada tabel
  const rows = document.querySelectorAll("table tr");
  rows.forEach((row, index) => {
    if (index === 0) return;
    row.addEventListener("mouseenter", () => {
      row.style.backgroundColor = "#f0f8ff";
    });
    row.addEventListener("mouseleave", () => {
      row.style.backgroundColor = "";
    });
  });

  // Dark Mode Toggle
  const toggleBtn = document.getElementById("toggleBtn");

  // Cek preferensi tersimpan
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀ Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      toggleBtn.textContent = "☀ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
});