const LoginPage = () => {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render({content:"Login", active:true, onclick:"goToLogin()"});
  const $singupButton = flatButton.render({content:"sing up", onclick:"goToSignup()"});

  const $logoCollabcode = logoCollabcode.render();
  const $titleLogin = titleLogin.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleLogin);

  const $formLogin = formLogin.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
};
