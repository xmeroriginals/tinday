function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  const themeColorMeta = document.getElementById("themeColorMeta");
  if (newTheme === "dark") {
    themeColorMeta.setAttribute("content", "#282828");
  } else {
    themeColorMeta.setAttribute("content", "#fc918c");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  const themeColorMeta = document.getElementById("themeColorMeta");
  if (savedTheme === "dark") {
    themeColorMeta.setAttribute("content", "#282828");
  } else {
    themeColorMeta.setAttribute("content", "#fc918c");
  }
});
