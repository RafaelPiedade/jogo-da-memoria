const formLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .form-input {
            margin: 0 30px;
        }

        .form-input > label{
            display:block;
            font-size: 16px;
            color:#9c9fa0;
        }

        .form-input > input{
            color:#3a4042;
            font-size: 18px;
            width:100%;
            line-height: 40px;
            border: none;
            border-bottom: 2px solid #9c9fa0;
        }
        .form-input > input::placeholder{
            color: #3a4042;
            opacity:1;
        }
        `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
        <form class="form-login">
            <div class="form-input">
                <label>Username ou e-mail</label>
                <input type="email" placeholder="example@email.com"/>
            </div>
        </form>
        `;
  };

  return {
    render: module.render
  };
})();
