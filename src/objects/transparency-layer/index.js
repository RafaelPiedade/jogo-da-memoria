const transparencyLayer = (() => {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .transparency-layer{
            background-color: rgba(58,64,66, 0.5);
            position: absolute;
            height: 100vh;
            width: 100vw;
            top: 0;
        }
    `;

    $head.insertBefore($style,null)

  };

  module.render = () => {
    module._style();
    return `
    <div class="transparency-layer"></div>
    `;
  };

  return {
    render: module.render
  };
})();