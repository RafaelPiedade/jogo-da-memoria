const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `
    <img 
        class='icon'
        src='img/icon-collabcode.png'
        alt='Gueio mascote da CollabCode'
    />`;

const $memoryCard2 = document.createElement("article");
$memoryCard2.classList.add("-selected")
    const $icon2 = `
    <img 
        class='icon'
        src='img/icon-c.png'
        alt='Livro de C++'
    />`;


$memoryCard.classList.add("memory-card");
$memoryCard.insertAdjacentHTML("afterbegin", $icon);

$memoryCard2.classList.add("memory-card")
$memoryCard2.classList.add("-selected")
$memoryCard2.insertAdjacentHTML("afterbegin", $icon2);

$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCard2, null);
