export default function bubble_sort(arr: number[]): void {

  let swapped = true;
  while (swapped) {
    let iter = 0;
    swapped = false;
    for (let i = 0; i < arr.length - iter; ++i) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp;
        swapped = true;
        iter++;
      }
    }
  }
}
