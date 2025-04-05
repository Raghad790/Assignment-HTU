//maximun number in array
let arr1 = [1, 5, 9, 6, 3, 87, 72, 23];
function maxNum(arr1) {
  let max = arr1[0];
  for (i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) {
      max = arr1[i];
    }
  }
  return max;
}

console.log(maxNum(arr1));

//reverse the array without revere method
let arr2 = [1, 5, 9];
function reversedarray(arr2) {
  let reversed = [];
  for (i = arr2.length - 1; i >= 0; i--) {
    reversed.push(arr2[i]);
  }
  return reversed;
}
console.log(reversedarray(arr2));

//algorthim3
let arr3 = [1, 5, 9, 6, 3, 87, 72, 23];
function fun(array, target) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) {
      return [array[left], array[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
console.log(fun(arr3, 9));
