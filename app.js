(() => {
  const { hash } = window.location;
  const paths = []
  paths[""] = login
  paths["#/login"] = login
  paths["#/signup"] = singnup
  paths["#/game"] = game
  console.log(hash);
  
  paths[hash]();
})();
