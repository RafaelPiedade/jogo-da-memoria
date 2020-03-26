const membrane = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .membrane{
      display:none;
        width: 100%;
        height: 100%;
        background-color: #000;
        position: absolute;
        z-index: 1;
        opacity: 0.85;
        transition: opacity 500ms ease-in 400ms, height 0ms linear 1000ms;

    }
    .membrane.-disable{
        opacity: 0;
        height: 0;
    }
    `;
    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
        <div class="membrane"></div>
    `;
  };

  module.disabled = () => {
    const $membrane = document.querySelector(".membrane");
    $membrane.classList.toggle("-disable");
  };

  return {
    create: module.create,
    disabled: module.disabled
  };
})();
