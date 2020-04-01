(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);

  const $logoCollabcode = logoCollabcode.render();
  const $titleLogin = titleLogin.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleLogin);
  const $formSignup = formSignup.render()

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend",$formSignup)

})();
