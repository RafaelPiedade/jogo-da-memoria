function f1 (valor) {
  console.log(`gg f1 ${valor}`);
  return text => console.log(`texto ${text}`);
};

const f2 = () => {
  console.log("gg f2");
  let f3 = f1(2);
  f3('f3');
};

f2();
