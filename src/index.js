//const $memoryCard = document.createElement("article");
//const $memoryCardFront = document.createElement("article");

const $root = document.querySelector("#root");
const $wrapBoard = document.createElement("div");
var $memoryCards = [];
const $iconCollab = `
    <img 
        class='icon'
        src='img/icon-collabcode.png'
        alt='Gueio mascote da CollabCode'
    />`;

for (let i = 0; i < 10; i++) {
  let $memoryCard = document.createElement("article");
  $memoryCard.classList.add("memory-card");
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
  $wrapBoard.insertBefore($memoryCard, null);
  $memoryCards.push($memoryCard);
}

console.log($memoryCards);
$wrapBoard.classList.add("wrap-board");
$root.insertBefore($wrapBoard, null);

/* const $iconC = `
    <img 
        class='icon'
        src='img/icon-c.png'
        alt='icone de um livro da linguagem C++'
    />`;
 */
/*


$memoryCard.classList.add("memory-card");
$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
$wrapBoard.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
$wrapBoard.insertBefore($memoryCardFront, null);
 */
