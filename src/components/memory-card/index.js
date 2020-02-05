function createMemoryCard() {
  /*const $memoryCard = document.createElement("article");
  $memoryCard.classList.add("memory-card"); */
  const $memoryCard = `
  <article class="memory-card">
    <img 
      class='icon'
      src='img/icon-collabcode.png'
      alt='Gueio mascote da CollabCode'
      onClick="handleClick()"
      />
  </article>
  `;
  return $memoryCard;
}

function createMemoryCardFront() {
  const $memoryCard = `
  <article class="memory-card -front">
    <img 
      class='icon'
      src='img/icon-c.png'
      alt='Gueio mascote da CollabCode'
      onClick="handleClick()"
      />
  </article>
  `;
  return $memoryCard;
}

function handleClick() {
  console.log('ee')
}

/*
cria elemento > const $memoryCard = document.createElement("article");
add classes   > $memoryCard.classList.add("memory-card", "-front");
insere na tela >$wrapCards.insertBefore($memoryCard, null); não é do componente
insere o icon >$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
*/
