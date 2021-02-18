const el = document.querySelectorAll(".icon");
const text = document.querySelectorAll(".text-heart");

function MoveIcon(a) {
  if (el[a].classList.contains("icon-move")) {
    el[a].classList.remove("icon-move");
    el[a].classList.remove("icon-open");
    text[a].classList.remove("text-heart-show");
  } else {
    el[a].classList.add("icon-move");
    setTimeout(() => {
      text[a].classList.add("text-heart-show");
    }, 5000);
  }
}
