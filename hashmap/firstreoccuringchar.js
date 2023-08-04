//input [2,5,1,2,3,5,1,2,4]
//       👆    👆
//output [2]
const input = [2, 5, 1, 2, 3, 5, 1, 2, 4];
function frc(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (obj[input[i]] + 1) {
      return input[i];
    } else {
      obj[input[i]] = i;
    }
  }
  return undefined;
}
console.log(frc(input));

//eazy peazy 👇🏻

function FRC(input) {
  let map = new Map();
  for (let i of input) {
    if (map.has(i)) {
      return i;
    } else {
      map.set(i, true);
    }
  }
  return null;
}

console.log(FRC(input));

// ez obj
function fRc(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (obj.hasOwnProperty(input[i])) {
      return input[i];
    } else {
      obj[input[i]] = i;
    }
  }
  return undefined;
}
console.log(fRc(input));
