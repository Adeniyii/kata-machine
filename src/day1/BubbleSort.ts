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

// this implementation has a much better best case time complexity than
// prime's implementation. the reason is that i only attempt to traverse 
// the array IF there was a swap in the previous step. The implication of this 
// is that, if the array is already sorted, the practial time complexity will not 
// be O(n^2) rather it will be O(n): we traverse the array fully one time.
