const titleLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .title-login {
        color: #f25a70;
        font-size: 24px;
        text-align:center;
        text-transform: uppercase;
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `<h1 class="title-login">${content}</h1>`;
  };

  return { render: module.render };
})();
