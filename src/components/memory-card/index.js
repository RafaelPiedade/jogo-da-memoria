const createMemoryCard = ({src, alt, nameClass=''}) => `
  <article class="memory-card ${nameClass}"
    onClick="handleClick(this)">
      <img 
        class='icon'
        src='${src}'
        alt=${alt}
      />
  </article>
`;

const handleClick = element => {
  element.classList.toggle("-front");
};

/*
cria elemento > const $memoryCard = document.createElement("article");
add classes   > $memoryCard.classList.add("memory-card", "-front");
insere na tela >$wrapCards.insertBefore($memoryCard, null); não é do componente
insere o icon >$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
*/
