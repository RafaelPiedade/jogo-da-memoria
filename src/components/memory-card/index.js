//const $wrapCards = document.querySelector(".wrap-cards");
function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
    <img 
    class='icon'
    src='img/icon-collabcode.png'
    alt='Gueio mascote da CollabCode'
    />`;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
    <img 
    class='icon'
    src='img/icon-c.png'
    alt='Gueio mascote da CollabCode'
    />`;

  $memoryCard.classList.add("memory-card", "-front");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}
