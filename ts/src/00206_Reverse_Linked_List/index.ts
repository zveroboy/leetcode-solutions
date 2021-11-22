import { ListNode, toGenerator } from '../data/ListNode'

export default function (head: ListNode | null): ListNode | null {
  let lhead = head
  while (head?.next) {
    const nextHead = head.next
    head.next = nextHead.next
    nextHead.next = lhead
    lhead = nextHead
  }

  return lhead
}
