const tb1 = [2, 6, 7, 12, 15, 33];
const tb2 = [14, 39, 9, 11];
const tb3 = [49, 21, 7, 5];
const tb4 = [12, 1, 2];

let sommeMultiple3 = 0;
for (let i = 0; i < tb1.length; i++) {
  if (tb1[i] % 3 === 0) {
    console.log(tb1[i]);
    sommeMultiple3 += tb1[i];
    // sommeMultiple3 = sommeMultiple3 + tb1[i];
  }
}

for (let i = 0; i < tb2.length; i++) {
  if (tb2[i] % 3 === 0) {
    console.log(tb2[i]);
    sommeMultiple3 += tb2[i];
  }
}

for (let i = 0; i < tb3.length; i++) {
  if (tb3[i] % 3 === 0) {
    console.log(tb3[i]);
    sommeMultiple3 += tb3[i];
  }
}

for (let i = 0; i < tb4.length; i++) {
  if (tb4[i] % 3 === 0) {
    console.log(tb4[i]);
    sommeMultiple3 += tb4[i];
  }
}

alert(`La somme est : ${sommeMultiple3}`);
