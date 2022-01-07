export function isSubsequenceRec(s: string, t: string): boolean {
  if (!s) {
    return true
  }

  let l = 0
  while (l < t.length) {
    if (t[l] === s[0]) {
      if (s.length === 1) {
        return true
      }
      return isSubsequence(s.slice(1), t.slice(l + 1))
    }
    l++
  }

  return false
}

export function isSubsequenceLoop(s: string, t: string): boolean {
  if (!s) {
    return true
  }

  let tl = 0
  let sl = 0

  while (tl < t.length) {
    if (t[tl] === s[sl]) {
      sl++
    }
    tl++
  }

  return sl >= s.length
}

export function isSubsequence(s: string, t: string): boolean {
  if (!s) {
    return true
  }

  let sl = 0

  for (const tc of t) {
    if (tc === s[sl]) {
      sl++
    }
  }

  return sl === s.length
}
