const flatButton = (() => {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id} {
        display: inline-block;
        background-color:${active ? "#f25a70" : "#eae6da"};
        color: ${active ? "#fff" : "#fffcee"};
        font-size: 24px;
        font-weight: bold;
        width: 50%;
        height: 176px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        padding-top:60px;
        box-sizing: border-box;
      }`;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({content = "", active = false, onclick=""}) => {
    module._id++;
    module._style(active);
    return `<a href="#" ${onclick && `onclick="${onclick}"`} class="flat-button-${module._id}">${content}</a>`;
  };
  
  return {
    render: module.render
  };
})();
