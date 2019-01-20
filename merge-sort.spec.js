const mergeSort = require('./merge-sort');
const merge = require('./merge-sort');

describe('Merge function', () => {
  test('merge function exists', () => {
    expect(merge).toBeDefined();
  });

  const arr1 = [3, 5, 6];
  const arr2 = [1, 2, 4];
  const mergedArr = [1, 2, 3, 4, 5, 6];
  test('merge takes two sorted arrays and returns a merged sorted array', () => {
    expect(merge(arr1, arr2)).toEqual(mergedArr);
  });
});

describe('Merge sort function', () => {
  test('mergeSort function exists', () => {
    expect(mergeSort).toBeDefined();
  });
  test('Merge sort takes an array and returns a sorted aray', () => {
    expect(mergeSort([4, 9, 3, 10, 1, 2, 7, 6, 5, 8])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);
  });
});
