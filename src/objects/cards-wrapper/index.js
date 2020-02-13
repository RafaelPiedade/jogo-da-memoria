let $MemoryCardsActive = [];

function createCardsWrapper() {
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

  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  $cardsWrapper.addEventListener("click", event => {
    if ($MemoryCardsActive.length === 2) {
      let $icon1 = $MemoryCardsActive[0].querySelector('.icon.-active')
      let $icon2 = $MemoryCardsActive[1].querySelector('.icon.-active')
      console.log($icon1.src)
      if ($icon1.src === $icon2.src) {
        console.log("Acertou");
        $MemoryCardsActive = []
      } else {
        console.log("Errou");
        setTimeout(() => {
          $MemoryCardsActive.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });
          $MemoryCardsActive = []
        }, 1500);
      }
    }
  });

  return $cardsWrapper;
}
