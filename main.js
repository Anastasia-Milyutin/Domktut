function blocks() {
  if (block.style.display === "none") {
    block.style.display = "block";
  } else {
    block.style.display = "none";
  }
}

const menuIcone = document.querySelector("#btn"),
  menu = document.querySelector("#Btn"),
  header = document.querySelector("#mobil");

menuIcone.addEventListener("click", () => {
  if (header.style.display === "none") {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
});
menu.addEventListener("click", () => {
  if (header.style.display === "none") {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
});
