export default function two_crystal_balls(breaks: boolean[]): number {
  const sqrtjump = Math.floor(Math.sqrt(breaks.length))
  for (let i = 0; i < breaks.length; i = sqrtjump + i) { // jump by sqrt(n) intervals till a breaking point is reached
    if (breaks[i] === true) {
      if (i === 0) return 0; // if ball breaks at first index, return 0
      for (let j = i - sqrtjump; j < i; ++j) { // set j to last unbroken jump point (i - sqrtjump); then traverse linearly till exact breaking point is found
        if (breaks[j] === true) {
          return j;
        }
      }
    }
  }
  return -1;
}
