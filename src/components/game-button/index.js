const gameButton = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .game-button{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      cursor:pointer;
      background-color:#2ed573;
      color: #fffcee;
      font-family:"Comfortaa", sans-serif;
      font-size: 1.05em;
      font-weight: bold;
      border: 2px solid #fffcee;
      transition: background 200ms linear;
      text-transform: uppercase;
      box-shadow: 0px 4px 8px #3a4042;
      z-index: 2;
      transition: opacity 300ms linear, height 0ms linear 400ms;
    }
    .game-button:hover{
      background-color:#2b9f5b;
    }

    .game-button.-disable{
      opacity: 0;
      overflow: hidden;
      height: 0;
    }

    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
        <button class="game-button" onclick="gameButton.handleClick(this)">Start</button>
      `;
  };

  module.handleClick = ($component)=>{
    console.log($component)
    $component.classList.add('-disable')
    membrane.disabled($component);

  }
  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
