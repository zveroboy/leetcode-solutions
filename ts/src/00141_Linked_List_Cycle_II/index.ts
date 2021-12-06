import { ListNode } from '../data/ListNode'

export default function <T = number>(
  head: ListNode<T> | null,
): ListNode<T> | null {
  let runner1 = head
  let runner2 = head
  let iRunner = head
  let cRunner = head
  let cRunner1Length = 0
  // let cycleLength = 0
  // let cycleIdx = -1
  // let intersectIdx = -1

  let bFound = false
  while (runner1?.next) {
    runner1 = runner1.next
    runner2 = runner2?.next?.next ?? null
    cRunner1Length++
    if (runner1 === runner2) {
      // intersectIdx = 0
      cRunner = runner1
      bFound = true
      break
    }
  }

  while (bFound) {
    if (iRunner === cRunner) {
      return iRunner
    }

    if (!cRunner) {
      throw new Error('Broken cycle')
    }

    if (!iRunner) {
      throw new Error('Broken list')
    }

    cRunner = cRunner.next
    if (cRunner === runner1) {
      iRunner = iRunner?.next
    }
  }

  return null
}
