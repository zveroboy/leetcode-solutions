import { ListNode } from '../data/ListNode'

export default function swapPairs(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return head
  }

  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}
