export default function bs_list(haystack: number[], needle: number): boolean {

  if (!haystack || !haystack.length) return false;
  if (haystack.length === 1) {
    return haystack[0] === needle;
  }

  let m = Math.floor(haystack.length / 2)

  if (haystack[m] === needle) {
    return true;
  } else if (haystack[m] > needle) {
    return bs_list(haystack.slice(0, m), needle)
  } else {
    return bs_list(haystack.slice(m + 1, haystack.length), needle)
  }
}
