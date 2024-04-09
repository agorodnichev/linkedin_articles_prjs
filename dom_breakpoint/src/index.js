import "./style.css";

const buttonElement = document.querySelector(".action button");
const actionWrapperElement = document.querySelector(".action");

let popup;

buttonElement.addEventListener("click", () => {
  togglePopup();
  if (popup) {
    window.scroll(20, 0);
  }
});

window.document.addEventListener("click", (event) => {
  if (event.target === buttonElement) {
    return;
  }
  if (event.target !== popup && !!popup) {
    togglePopup();
  }
});

document.addEventListener("scroll", () => {
  if (popup) {
    popup.remove();
  }
});

function togglePopup() {
  if (popup) {
    popup.remove();
    popup = null;
  } else {
    popup = addPopup();
  }
}

function addPopup() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent = "content";
  actionWrapperElement.appendChild(popup);
  return popup;
}
