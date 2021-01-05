function MenuOpen() {
  let menu = document.querySelector("#mobile-container");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.getElementById("burger-button").addEventListener("click", MenuOpen)