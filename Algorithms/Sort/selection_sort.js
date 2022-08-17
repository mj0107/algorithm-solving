function selection_sort1(arr) {
  console.log(`before selection sorting: ${[...arr]}`);
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    let smaller_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smaller_idx]) {
        smaller_idx = j;
      }
    }
    // swap
    [arr[i], arr[smaller_idx]] = [arr[smaller_idx], arr[i]];
    cnt++;
  }

  console.log(`after selection sorting: ${[...arr]}`);
  console.log(`Sorting count = ${cnt}`);
}

function selection_sort2(arr) {
  console.log(`before selection sorting: ${[...arr]}`);
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    let smaller_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smaller_idx]) {
        smaller_idx = j;
      }
    }
    // swap
    // 현재 인덱스가 최솟값의 인덱스일 경우 swap을 하지 않도록
    if (i !== smaller_idx) {
      [arr[i], arr[smaller_idx]] = [arr[smaller_idx], arr[i]];
      cnt++;
    }
  }

  console.log(`after selection sorting: ${[...arr]}`);
  console.log(`Sorting count = ${cnt}`);
}

let arr = [3, 6, 13, 4, 33, 12, 35, 87, 8, 64];
selection_sort1(arr); // Sorting Count = 10
selection_sort2(arr); // Sorting Coutn = 8
