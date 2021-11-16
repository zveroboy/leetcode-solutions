import { ListNode, toGenerator } from '../data/ListNode'

export default function (
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (!headA || !headB) {
    return null
  }

  let lengthA = [...toGenerator(headA)].length
  let runnerA: ListNode | null = headA

  let lengthB = [...toGenerator(headB)].length
  let runnerB: ListNode | null = headB

  while (lengthA !== lengthB) {
    if (runnerA.next && lengthA > lengthB) {
      runnerA = runnerA.next
      lengthA--
    } else if (runnerB.next && lengthA < lengthB) {
      runnerB = runnerB.next
      lengthB--
    }
  }

  if (runnerA === runnerB) {
    return runnerA
  }

  while (runnerA?.next && runnerB?.next) {
    runnerA = runnerA.next
    runnerB = runnerB.next

    if (runnerA === runnerB) {
      return runnerA
    }
  }

  return null
}
