const input = [3,4,1,7,9,3,5,6,44,66];

function bubbleSort(arr) {
  const to = arr.length - 1;
  for (let i = 0; i<=to; i++) {
    for(let j = 0; j<=to - 1; j++) {
      if(arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

console.log(bubbleSort(input))