import { ListNode } from '../data/ListNode'

export type ReverseLinkedList<T> = (
  head: ListNode<T> | null,
) => ListNode<T> | null

export function defaultSolution<T = number>(
  head: ListNode<T> | null,
): ListNode<T> | null {
  let lhead = head
  while (head?.next) {
    const nextHead = head.next
    head.next = nextHead.next
    nextHead.next = lhead
    lhead = nextHead
  }

  return lhead
}

export function recursionSolution<T = number>(
  head: ListNode<T> | null,
): ListNode<T> | null {
  const helper = (
    head: ListNode<T> | null,
    node: ListNode<T> | null,
  ): ListNode<T> | null => {
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
