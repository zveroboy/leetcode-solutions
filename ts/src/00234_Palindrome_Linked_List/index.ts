import { ListNode } from '../data/ListNode'

export default function <T = number>(head: ListNode<T> | null): boolean {
  let slow: ListNode<T> | null = head
  let fast: ListNode<T> | null = head
  while (fast?.next?.next) {
    fast = fast.next?.next ?? null
    slow = slow?.next ?? null
  }

  let halfHead = slow?.next ?? null

  let lhead = halfHead
  while (halfHead?.next) {
    const nextHead = halfHead.next
    halfHead.next = nextHead.next
    nextHead.next = lhead
    lhead = nextHead
  }
  halfHead = lhead

  if (slow?.next) {
    slow.next = halfHead
  }

  let sRunner = head
  let halfStartRunner = halfHead
  while (sRunner && halfStartRunner) {
    if (sRunner.val !== halfStartRunner.val) {
      return false
    }
    sRunner = sRunner.next
    halfStartRunner = halfStartRunner.next
  }

  return true
}
