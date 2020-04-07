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
      placeholder: "example@email.com",
    });

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({
      id: "password",
      placeholder: "8 digite",
      type: "password",
    });
    const $eyeCollabcode = ayeCollabcode.render({ attrFor: "password" });

    const $forgetPassword = linkCollabcode.render({
      content: "Forget Password ?",
    });

    const $btnCollabcode = btnCollabcode.render({
      content: "Login",
      path: "game",
    });

    return `
    ${$labelEmail}
    ${$inputEmail}

    ${$labelPassword}
    ${$inputPassword}
    ${$eyeCollabcode}
    ${$forgetPassword}

    ${$btnCollabcode}
    `;
  };

  module.render = () => {
    module._style();
    return `
        <form 
          class="form-login"
          method="POST" 
          action=""
        >
           ${module._children()}
        </form>
        `;
  };

  return {
    render: module.render,
  };
})();
