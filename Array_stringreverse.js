// questuion : reverse a string
///// my bruteforce solution
function reverStr(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;
  else {
    const stringArr = str.split(``);
    let reverseArr = [];
    for (let i = stringArr.length - 1; i >= 0; i--) {
      reverseArr.push(stringArr[i]);
    }
    return reverseArr.join(``);
  }
}
//sleek sexy wayy
function reverStr2(str) {
  const reversedstring1 = str.split(``).reverse().join(``);
  //or
  return [...str].reverse().join(``);
}

console.log(reverStr2("shivansh"));
