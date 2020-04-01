const btnCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode{
          background-color:#f25a70;
          color:#fff;
          font-size: 14px;
          text-transform: uppercase;
          width:100%;
          height:48px;
          border-radius: 24px;
          font-weight: bold;
      }
      .input-collabcode + .btn-collabcode{
          margin-top:45px;
      }
      `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `<input type="submit" value="${content}" class="btn-collabcode"/>`;
  };
  return {
    render: module.render
  };
})();
