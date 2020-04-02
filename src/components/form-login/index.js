const formLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .form-login {
            padding: 0 35px 35px;
        }`;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $labelEmail = labelCollabcode.render("Username ou e-mail");
    const $inputEmail = inputCollabcode.render("example@email.com", "text");

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render("*********", "password");

    const $forgetPassword = labelCollabcode.render("Forget password?");

    const $btnCollabcode = btnCollabcode.render("Login")

    return `
    ${$labelEmail}
    ${$inputEmail}

    ${$labelPassword}
    ${$inputPassword}
    ${$forgetPassword}
    
    ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();
    return `
        <form class="form-login">
           ${module._children()}
        </form>
        `;
  };

  return {
    render: module.render
  };
})();
