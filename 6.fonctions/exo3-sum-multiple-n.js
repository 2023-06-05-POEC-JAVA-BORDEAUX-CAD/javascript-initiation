const tb1 = [2, 6, 7, 12, 15, 33];
const tb2 = [14, 39, 9, 11];
const tb3 = [49, 21, 7, 5];
const tb4 = [12, 1, 2];

function sumMultipleN(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % n === 0) {
      console.log(arr[i]);
      sum += arr[i];
    }
  }
  return sum;
}

let sum =
  sumMultipleN(tb1, 3) +
  sumMultipleN(tb2, 3) +
  sumMultipleN(tb3, 3) +
  sumMultipleN(tb4, 3);

alert(`La somme est : ${sum}`);

// function calculer(...tb){

// }
