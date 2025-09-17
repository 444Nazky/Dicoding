document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const extraContent = button.previousElementSibling;
      if (extraContent.style.display === "block") {
        extraContent.style.display = "none";
        button.textContent = "Baca Selengkapnya";
      } else {
        extraContent.style.display = "block";
        button.textContent = "Sembunyikan";
      }
    });
  });
});
