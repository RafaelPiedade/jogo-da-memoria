const formSignup = (() => {
  const module = {};

  module._children = () => {
    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render("Name-example", "text");

    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollabcode.render("example@email.com", "email");

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render("", "password");

    const $confirmPasswordLabel = labelCollabcode.render("Confirm password");
    const $confirmPasswordInput = inputCollabcode.render("", "password");
    const $btnCollabcode = btnCollabcode.render("Sign up");
    console.log($btnCollabcode)

    return `
    ${$usernameLabel}
    ${$usernameInput}

    ${$emailLabel}
    ${$emailInput}

    ${$passwordLabel}
    ${$passwordInput}

    ${$confirmPasswordLabel}
    ${$confirmPasswordInput}

    ${$btnCollabcode}
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .form-signup{
      padding: 0 35px 30px;
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">
    ${module._children()}
    </form>`;
  };

  return {
    render: module.render
  };
})();
