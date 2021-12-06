import { ListNode } from '../data/ListNode'

export default function <T = number>(
  head: ListNode<T> | null,
  n: number,
): ListNode<T> | null {
  let first: ListNode<T> | null = head
  let last: ListNode<T> | null = null

  while (first?.next) {
    if (--n === 0) {
      last = head
    } else if (last) {
      last = last.next
    }
    first = first?.next ?? null
  }

  if (last === null) {
    return head?.next ?? null
  }

  if (last?.next) last.next = last.next?.next

  return head
}
