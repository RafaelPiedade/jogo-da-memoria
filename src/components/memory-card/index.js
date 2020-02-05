const createMemoryCard = () => {
  return `
  <article class="memory-card"
    onClick="handleClick(this)"
  >
    <img 
      class='icon'
      src='img/icon-collabcode.png'
      alt='Gueio mascote da CollabCode'
      />
  </article>
  `;
};

const handleClick = element => {
  element.classList.toggle("-front");
};

/*
cria elemento > const $memoryCard = document.createElement("article");
add classes   > $memoryCard.classList.add("memory-card", "-front");
insere na tela >$wrapCards.insertBefore($memoryCard, null); não é do componente
insere o icon >$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
*/
