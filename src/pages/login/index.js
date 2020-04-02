(() => {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("login", true)
  const $singupButton = flatButton.render("sing up")

  const $logoCollabcode = logoCollabcode.render()
  const $titleLogin = titleLogin.render("Hello!")
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleLogin)

  const $formLogin = formLogin.render()


  $root.insertAdjacentHTML("beforeend",$loginButton)
  $root.insertAdjacentHTML("beforeend",$singupButton)
  $root.insertAdjacentHTML("beforeend",$logoWrapper)
  $root.insertAdjacentHTML("beforeend",$formLogin)
})();
