const formSignup = (() => {
  const module = {};

  module._children = () => {
    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render({
      placeholder: "Name-example"
    });

    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollabcode.render({
      placeholder: "example@email.com",
      type: "email"
    });

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render({
      placeholder: "*********",
      type: "password"
    });

    const $confirmPasswordLabel = labelCollabcode.render("Confirm password");
    const $confirmPasswordInput = inputCollabcode.render({
      placeholder: "*********",
      type: "password"
    });
    const $btnCollabcode = btnCollabcode.render("Sign up");

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
