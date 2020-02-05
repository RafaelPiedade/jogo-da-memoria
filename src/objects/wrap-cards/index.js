const $root = document.querySelector("#root");
const $wrapCards = document.createElement("section");

$wrapCards.addEventListener("click", e => {
  if (e.target.className == "memory-card" || e.target.className == "icon") {
    console.log("ae");
  }
});

$wrapCards.classList.add("wrap-cards");
$root.insertBefore($wrapCards, null);
