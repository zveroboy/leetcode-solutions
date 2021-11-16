import { ListNode } from '../data/ListNode'

export default function (head: ListNode | null, n: number): ListNode | null {
  let first: ListNode | null = head
  let last: ListNode | null = null

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
