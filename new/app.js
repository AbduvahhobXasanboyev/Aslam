window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loaders");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
});
