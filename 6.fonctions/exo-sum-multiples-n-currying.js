function sumMultpleOf(n) {
  return function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % n === 0) {
        console.log(arr[i]);
        sum += arr[i];
      }
    }
    return sum;
  };
}

const sumMultipleOf3 = sumMultpleOf(3);

let sum =
  sumMultipleOf3(tb1) +
  sumMultipleOf3(tb2) +
  sumMultipleOf3(tb3) +
  sumMultipleOf3(tb4);

alert(`La somme est : ${sum}`);
