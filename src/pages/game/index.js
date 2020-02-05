const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const icons = [
    {
      src: "img/icon-collabcode.png",
      alt: "Gueio mascote da CollabCode",
      nameClass: ""
    },
    {
      src: "img/icon-c.png",
      alt: "Icone de um livro C++",
      nameClass: "-front"
    },
    {
      src: "img/icon-java.png",
      alt: "Icone de um livro Java",
      nameClass: "-front"
    },
    {
      src: "img/icon-js.png",
      alt: "Icone de um livro JavaScript",
      nameClass: "-front"
    },
    {
      src: "img/icon-settings.png",
      alt: "Icone de engrenagens",
      nameClass: "-front"
    }
  ];

const $memoryCard = createMemoryCard(icons[0]);
const $memoryCardFront = createMemoryCard(icons[1]);
const $memoryCard2 = createMemoryCard(icons[2]);
const $memoryCard3 = createMemoryCard(icons[3]);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard2);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard2);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard3);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard3);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard4);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard4);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
