const buttonForm = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .button-form{
        background-color:#f25a70;
        color:#fff;
        font-size: 14px;
        text-transform: uppercase;
        width:100%;
        height:48px;
        border-radius: 24px;
        font-weight: bold;
    }`;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `<button class="button-form">${content}</button>`;
  };
  return {
    render: module.render
  };
})();
