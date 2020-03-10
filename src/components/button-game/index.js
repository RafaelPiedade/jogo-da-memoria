const buttonGame = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')
    $style.textContent = `
      .button-game{
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
      }
      .button-game > .button {
        cursor:pointer;
        background-color:#1fb78a;
        color: #fff;
        font-size: 22px;
        padding: 5px;
        border: 2px solid #fff;
        border-radius: 10px;
        font-family:font-family: "Comfortaa", sans-serif;
        transition: all 200ms linear;
      }
      .button-game > .button:hover{
        background-color:#2b976c;
        transform:scale(1.1);
      }
    `;

    $head.insertAdjacentElement('beforebegin', $style)
  };

  module.create = () => {
    module._style()
    return `
        <div class="button-game">
            <button class="button">NOVO JOGO</button>
        </div>
      `;
  };
  return {
    create: module.create
  }
})();
