import { ListNode } from '../data/ListNode'

export function removeElements(
  head: ListNode | null,
  val: number,
): ListNode | null {
  let res: ListNode | null = head
  let prev: ListNode | null = null
  let node: ListNode | null = head
  do {
    if (node?.val === val) {
      if (prev) {
        prev.next = node?.next ?? null
      } else {
        res = node?.next ?? null
      }
    } else {
      prev = node
    }
    node = node?.next ?? null
  } while (node)
  return res
}
