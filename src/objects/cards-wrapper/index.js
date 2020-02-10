const cardsWrapper = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 10px;
    }
  
    .cards-wrapper > .memory-card {
      margin-bottom: 10px;
    }`;

  $head.insertBefore($style, null);

  return () => {
    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("cards-wrapper");
    return $cardsWrapper;
  };
};
