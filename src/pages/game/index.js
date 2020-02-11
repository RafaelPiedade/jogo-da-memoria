const $root = document.querySelector("#root");

const icons = [
  {
    src: "img/icon-collabcode.png",
    alt: "Gueio mascote da CollabCode",
    nameClass: ""
  },
  {
    src: "img/icon-c.png",
    alt: "Icone de um livro C++",
    nameClass: ""
  },
  {
    src: "img/icon-java.png",
    alt: "Icone de um livro Java",
    nameClass: ""
  },
  {
    src: "img/icon-js.png",
    alt: "Icone de um livro JavaScript",
    nameClass: ""
  },
  {
    src: "img/icon-settings.png",
    alt: "Icone de engrenagens",
    nameClass: ""
  }
];

const createCardsWrapper = cardsWrapper();
const createMemoryCard = memoryCard();

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(icons[0]);
const $memoryCardC = createMemoryCard(icons[1]);
const $memoryCardJava = createMemoryCard(icons[2]);
const $memoryCardJS = createMemoryCard(icons[3]);
const $memoryCardTool = createMemoryCard(icons[4]);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardTool);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardTool);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
