function merge(arr1, arr2) {
  const mergedArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) mergedArr.push(arr1.shift());
    else mergedArr.push(arr2.shift());
  }
  return mergedArr.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  const secondHalf = arr.slice(Math.floor(arr.length / 2));

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

// Slightly different recursive option for mergeSort
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const firstHalf = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
//   const secondHalf = mergeSort(arr.slice(Math.floor(arr.length / 2)));

//   return merge(firstHalf, secondHalf);
// }


// Different merge option, doesn't mutate the original arrays
// function merge(arr1, arr2) {
//   const mergedArr = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArr.push(arr1[i]);
//       i++;
//     } else {
//       mergedArr.push(arr2[j]);
//       j++;
//     }
//   }
//   return mergedArr.concat(arr1.slice(i)).concat(arr2.slice(j));
// }

console.log(mergeSort([4, 9, 3, 10, 1, 2, 7, 6, 5, 8]));

module.exports = mergeSort;
module.exports = merge;
