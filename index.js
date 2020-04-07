LoginPage();

const goToSignup = () => {
  const $root = document.querySelector("#root");
  let $children = $root.firstElementChild;
  while ($children) {
    $children.remove();
    $children = $root.firstElementChild;
  }

  document.querySelectorAll("style").forEach($e => $e.remove());
  SignupPage();
};

const goToLogin = () => {
  const $root = document.querySelector("#root");
  let $children = $root.firstElementChild;
  while ($children) {
    $children.remove();
    $children = $root.firstElementChild;
  }

  document.querySelectorAll("style").forEach($e => $e.remove());
  LoginPage();
};

const teste=()=>{
    console.log('teste c')
}