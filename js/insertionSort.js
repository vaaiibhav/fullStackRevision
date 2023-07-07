function insertionSort(arr) {
  console.time("insertionSort");
  let index, key, j;
  for (index = 1; index < arr.length; index++) {
    key = arr[index];
    j = index - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  console.timeEnd("insertionSort");
  console.log("insertionSort =>", arr);
}

function bubbleSort(arr) {
  console.time("bubbleSort");

  var i, j, temp;
  var swapped;
  for (i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.timeEnd("bubbleSort");
  console.log(`bubbleSort => ${arr}`);
}
const printArray = (array) => {
  console.log(`printArray => ${array}`);
};
let arr = [12, 11, 13, 5, 6];

printArray(arr);
insertionSort(arr);
bubbleSort(arr);
console.time("Js Sort");
console.log(
  arr.sort((a, b) => {
    a - b;
  })
);
console.timeEnd("Js Sort");
console.log(arr);
