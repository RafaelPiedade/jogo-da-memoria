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
    const $inputEmail = inputCollabcode.render({
      placeholder: "example@email.com"
    });

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({
      placeholder: "*********",
      type: "password"
    });

    const $forgetPassword = linkCollabcode.render({
      content: "Forget Password ?"
    });

    const $btnCollabcode = btnCollabcode.render("Login");

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
        <form class="form-login" onSubmit="formLogin.makeLogin()">
           ${module._children()}
        </form>
        `;
  };

  module.makeLogin = () => {
    const $root = document.querySelector("#root");
    let $children = $root.firstElementChild
    while($children){
      $children.remove();
      $children = $root.firstElementChild;
    }

    document.querySelectorAll('style').forEach($e => $e.remove())
    GamePage()
  };

  return {
    render: module.render,
    makeLogin: module.makeLogin
  };
})();
