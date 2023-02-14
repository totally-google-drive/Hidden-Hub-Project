const showDivButton = document.querySelector("#show-div");
const contentDiv = document.querySelector("#content");

showDivButton.addEventListener("click", function() {
  contentDiv.classList.toggle("hidden");
});
