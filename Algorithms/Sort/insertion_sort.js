function insertion_sort(arr) {
  console.log(`Before insertion sorting: ${[...arr]}`);
  let cnt = 0;

  for (var i = 1; i < arr.length; i++) {
    const cur = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > cur; j--) {
      if (cur < arr[j]) arr[j + 1] = arr[j];
      cnt++;
    }

    arr[j + 1] = cur;
  }

  console.log(`After insertion sorting: ${[...arr]}`);
  console.log(`Sorting count = ${cnt}`);
}

let arr = [3, 6, 13, 4, 33, 12, 35, 87, 6, 64];
insertion_sort(arr);
