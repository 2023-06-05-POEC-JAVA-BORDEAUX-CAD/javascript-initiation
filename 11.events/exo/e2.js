function findFirstIndexEqualValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return arr[i];
    }
  }
  return -1;
  //   throw new Error("Aucune valeur trouvée");
}

findFirstIndexEqualValue([10, 20, 11, 12, 4]);
findFirstIndexEqualValue([2, 1, 11, 12, 4]);
findFirstIndexEqualValue([12, 13, 14]);
