/* function f1 (valor) {
  console.log(`gg f1 ${valor}`);
  return text => console.log(`texto ${text}`);
};

const f2 = () => {
  console.log("gg f2");
  let f3 = f1(2);
  f3('f3');
};*/

const reg1 = /abc/;
const s1 = "Você conhece o a5bc";
console.log(reg1.test(s1));
console.log(s1.search(reg1))

console.log(
`booo`.search(/bo*/),
`Scoobdoo`.search(/bo*/),
`abcd`.search(/bo*/),
`A bird`.search(/bo*/))

const email1 = "rafa_el@gmail.com"
const reg = /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/
const f=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regplaca = /^[A-Z]{3}\d{4}$/
console.log(reg.test(email1))
console.log(regplaca.test("AAA1234"))