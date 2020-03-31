(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);

  const $logoCollabcode = logoCollabcode.render();
  const $titleLogin = titleLogin.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleLogin);

  //const $formLogin = formLogin.render();
  const $labelCollabcode = labelCollabcode.render("Username ou e-mail")
  const $inputCollabcode = inputCollabcode.render("example@email.com", "email")

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend",$labelCollabcode)
  $root.insertAdjacentHTML("beforeend",$inputCollabcode)
})();
