function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  return $cardsWrapper;
}

const $head = document.querySelector("head");
const $style = document.createElement("style");
$style.textContent = `
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
    user-select: none;
  }

  .cards-wrapper > .memory-card {
    margin-bottom: 10px;
  }`;

$head.insertBefore($style, null);

/* 
$cardsWrapper.addEventListener("click", e => {
  if (e.target.className == "memory-card" || e.target.className == "icon") {
    console.log("ae");
  }
}); 
*/
