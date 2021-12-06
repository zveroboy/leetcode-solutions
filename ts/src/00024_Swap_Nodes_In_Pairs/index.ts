import { ListNode } from '../data/ListNode'

export default function swapPairs<T = number>(
  head: ListNode<T> | null,
): ListNode<T> | null {
  if (!head?.next) {
    return head
  }

  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}
