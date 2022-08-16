function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = 0;
  
  while(arr[middle] !== num) {
      middle = Math.floor((left + right) / 2);
      if(left >= right) break;
      
      if(arr[middle] < num) left = middle + 1;
      else if(arr[middle] > num) right = middle - 1;
  }
  
  return arr[middle] === num ? middle : -1;
}

const arr = [2,5,6,9,13,15,28,30]
const elem = 15;

console.log(binarySearch(arr, elem));