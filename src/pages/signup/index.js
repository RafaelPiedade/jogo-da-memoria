(function() {
  const $root = document.querySelector("#root");

    const $flatButtonLogin = flatButton.render("Log in", true)
    const $flatButtonSingup = flatButton.render("Sing up")

  $root.insertAdjacentHTML("beforeend",$flatButtonLogin)
  $root.insertAdjacentHTML("beforeend",$flatButtonSingup)
})();
