const layerLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .layer-login {
        position: absolute;
        background-color:#fff;
        border-radius: 50% 50% 0 0;
        top: 100px;
        left:50%;
        transform: translateX(-50%);
        text-align: center;
        
    }

    .layer-login > .icon{
        width: 171px;
        height:175px;
        margin:40px;
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (title="") => {
    module._style();
    return `<div class="layer-login">
    <img class='icon'
        src='img/icon-collabcode.png'
        alt='Gueio mascote da CollabCode'
    />
    ${titleLogin.render(title)}
    </div>`;
  };

  return {
    render: module.render
  };
})();
