const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");


const $iconCollab = `
    <img 
        class='icon'
        src='img/icon-collabcode.png'
        alt='Gueio mascote da CollabCode'
    />`;

    const $iconC = `
    <img 
        class='icon'
        src='img/icon-c.png'
        alt='icone de um livro da linguagem C++'
    />`;


$memoryCard.classList.add("memory-card");
$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card")
$memoryCardFront.classList.add("-front")
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
$root.insertBefore($memoryCardFront, null);

