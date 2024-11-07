// let arr1 = [1, 2, 23, 54, 67, 87];
// let arr2 = [2, 45, 66, 77, 199];
// let arr = 

function mergesortarray(arr1, arr2) {
  let ans = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    ans.push(arr2[j]);
    j++;
  }
  return ans;
}

// let ans1 = mergesortarray(arr1, arr2);
// console.log(ans1);

function mergesort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  let mid = Math.floor((0 + arr.length-1) / 2);

  let left = mergesort(arr.slice(0, mid + 1));
  let right = mergesort(arr.slice(mid + 1));

  return mergesortarray(left, right);
}

let ans = mergesort([2, 33, 3, 22, 1, 44, 55, 66, 75, 44, 34, 23]);
console.log(ans);

console.log("aman")
