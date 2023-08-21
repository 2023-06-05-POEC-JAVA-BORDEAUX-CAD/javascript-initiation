const tb1 = [2, 6, 7, 12, 15, 33];
const tb2 = [14, 39, 9, 11];
const tb3 = [49, 21, 7, 5];
const tb4 = [12, 1, 2];

function sumMultiple3(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      console.log(arr[i]);
      sum += arr[i];
    }
  }
  return sum;
}


let sum =
  sumMultiple3(tb1) + sumMultiple3(tb2) + sumMultiple3(tb3) + sumMultiple3(tb4);

alert(`La somme est : ${sum}`);
