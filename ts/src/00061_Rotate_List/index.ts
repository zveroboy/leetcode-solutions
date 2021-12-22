import { ListNode } from '../data/ListNode'

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let tail: ListNode | null = head

  let newHead: ListNode | null = head

  let rotateNode: ListNode | null = head

  while (k--) {
    tail = tail?.next ?? head
  }

  rotateNode = head

  // Case when k == list.lenght
  if (tail === head) {
    return head
  }

  while (tail?.next) {
    rotateNode = rotateNode?.next ?? head
    tail = tail?.next
  }

  if (rotateNode?.next) {
    newHead = rotateNode.next
    rotateNode.next = null

    let newTail: ListNode | null = newHead
    while (newTail.next) {
      newTail = newTail?.next
    }
    newTail.next = head
  } else {
    rotateNode && (rotateNode.next = head)
    newHead = head?.next ?? null
    head && (head.next = null)
  }

  return newHead
}
