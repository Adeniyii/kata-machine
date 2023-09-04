export default function quick_sort(arr: number[]): void {
  sort(arr, 0, arr.length - 1);
}

function sort(arr: number[], top: number, bot: number) {
  if (top >= bot) return;
  let pivot = partition(arr, top, bot)
  sort(arr, top, pivot - 1)
  sort(arr, pivot + 1, bot)
}

function partition(arr: number[], top: number, bot: number) {
  let pivot = bot;
  let i = top;
  let j = top - 1;
  let tmp;

  for (; i < pivot; i++) {
    if (arr[i] < arr[pivot]) {
      ++j;
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

  ++j
  tmp = arr[j];
  arr[j] = arr[pivot];
  arr[pivot] = tmp;

  return j;
}
