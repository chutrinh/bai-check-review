const arr = [1, 4, 1, 2, 3, 5];

const b = arr.reduce((su, item) => {
  if (item % 2 == 0) {
    return (su += item);
  }
  return su;
}, 0);
console.log("tổng của số chẳn trong mãng arr là:", b);

const c = [2, 3];
let d = [];
const e = [];

for (let i = 0; i < c.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    d.push(c[i] * j);
  }
  e.push(d);
  d = [];
}

let f = [];
for (let i = 0; i < e.length; i++) {
  for (let j = 0; j < e[i].length; j++) {
    arr.forEach((item) => {
      if (item === e[i][j]) {
        f.push(item);
      }
    });
  }
}
console.log("bổi của các phần tử trong mãng c có trong mãng arr là:", f);
