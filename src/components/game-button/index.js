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
      font-family:font-family: "Comfortaa", sans-serif;
      font-size: 1.05em;
      font-weight: bold;
      border: 2px solid #fffcee;
      transition: background 200ms linear;
      text-transform: uppercase;
      box-shadow: 0px 4px 8px #3a4042;
    }
    .game-button:hover{
      background-color:#2b9f5b;
    }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
        <button class="game-button">Start</button>
      `;
  };
  return {
    create: module.create
  };
})();
