(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);

  const $logoCollabcode = logoCollabcode.render();
  const $titleLogin = titleLogin.render("Hello!");

  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleLogin);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
})();
