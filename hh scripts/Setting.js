const button = document.getElementById("settingsButton");
const menu = document.getElementById("settingsMenu");

button.addEventListener("click", function() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

const form = document.getElementById("settingsForm");
const backgroundColorInput = form.elements.backgroundColor;
const fontColorInput = form.elements.fontColor;
const fontSizeSelect = form.elements.fontSize;
const textAlignInputs = form.elements.textAlign;
const invertImagesCheckbox = form.elements.invertImages;

backgroundColorInput.value = localStorage.getItem("backgroundColor") || "dimgray";
fontColorInput.value = localStorage.getItem("fontColor") || "black";
fontSizeSelect.value = localStorage.getItem("fontSize") || "14";
for (const textAlignInput of textAlignInputs) {
  if (textAlignInput.value === localStorage.getItem("textAlign")) {
    textAlignInput.checked = true;
  }
}
invertImagesCheckbox.checked = localStorage.getItem("invertImages") === "true";

document.body.style.backgroundColor = backgroundColorInput.value;
document.body.style.color = fontColorInput.value;
document.body.style.fontSize = fontSizeSelect.value + "px";
document.body.style.textAlign = localStorage.getItem("textAlign") || "left";

const images = document.querySelectorAll("img");
for (const image of images) {
  image.style.filter = invertImagesCheckbox.checked ? "invert(100%)" : "";
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  localStorage.setItem("backgroundColor", backgroundColorInput.value);
  localStorage.setItem("fontColor", fontColorInput.value);
  localStorage.setItem("fontSize", fontSizeSelect.value);
  localStorage.setItem("textAlign", textAlignInputs.value);
  localStorage.setItem("invertImages", invertImagesCheckbox.checked);

  document.body.style.backgroundColor = backgroundColorInput.value;
  document.body.style.color = fontColorInput.value;
  document.body.style.fontSize = fontSizeSelect.value + "px";
  document.body.style.textAlign = textAlignInputs.value;

  for (const image of images) {
    image.style.filter = invertImagesCheckbox.checked ? "invert(100%)" : "";
  }

  menu.style.display = "none";
});

settingsButton.addEventListener("click", function() {
  menu.style.display = "block";
  menu.style.position = "absolute";
  menu.style.top = settingsButton.offsetTop + settingsButton.offsetHeight + "px";
  menu.style.left = settingsButton.offsetLeft + "px";
});
