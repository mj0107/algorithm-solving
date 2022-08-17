// Sinking Sort 라고도 하는데,
// 버블정렬과 방법은 같지만 내림차순으로 정렬한다.

function bubble_sort1(arr) {
  console.log(`before bubble sorting: ${[...arr]}`);
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    // 이와 같은 방법으로 반복문을 사용하게 되면,
    // 마지막은 범위를 벗어난 undefined와 비교하게 된다.
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      cnt++;
    }
  }

  console.log(`After bubble sorting: ${[...arr]}`);
  console.log(`Sorting count = ${cnt}`);
}

function bubble_sort2(arr) {
  console.log(`before bubble sorting: ${[...arr]}`);
  let cnt = 0;

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      cnt++;
    }
  }

  console.log(`After bubble sorting: ${[...arr]}`);
  console.log(`Sorting count = ${cnt}`);
}

function bubble_sort3(arr) {
  console.log(`before bubble sorting: ${[...arr]}`);
  let cnt = 0;

  for (let i = arr.length; i > 0; i--) {
    let sort_finish = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sort_finish = false;
      }
      cnt++;
    }
    // 이미 정렬이 완료되었으면 반복문을 빠져나온다
    if (sort_finish) break;
  }

  console.log(`After bubble sorting: ${[...arr]}`);
  console.log(`Sorting count = ${cnt}`);
}

let arr = [3, 6, 13, 4, 33, 12, 35, 87, 6, 64];
bubble_sort1(arr); // Sorting Count = 100
bubble_sort2(arr); // Sorting Count = 45
bubble_sort3(arr); // Sorting Count = 39
