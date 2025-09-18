    document.querySelectorAll(".toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const extra = btn.nextElementSibling;
        extra.style.display = extra.style.display === "block" ? "none" : "block";
        btn.textContent = extra.style.display === "block" 
          ? "Tutup" 
          : "Baca Selengkapnya";
      });
    });