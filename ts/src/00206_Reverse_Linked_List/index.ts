import { ListNode } from '../data/ListNode'

export type ReverseLinkedList = (head: ListNode | null) => ListNode | null

export function defaultSolution(head: ListNode | null): ListNode | null {
  let lhead = head
  while (head?.next) {
    const nextHead = head.next
    head.next = nextHead.next
    nextHead.next = lhead
    lhead = nextHead
  }

  return lhead
}

export function recursionSolution(head: ListNode | null): ListNode | null {
  const helper = (
    head: ListNode | null,
    node: ListNode | null,
  ): ListNode | null => {
    if (!node) {
      return head
    }

    const nextNode = node.next
    node.next = head

    if (!nextNode) {
      return node
    }

    return helper(node, nextNode)
  }

  return helper(null, head)
}
