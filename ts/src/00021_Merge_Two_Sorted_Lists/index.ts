import { ListNode } from '../data/ListNode'

export function mergeTwoListsSimple(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const getMinMax = (
    node1: ListNode | null,
    node2: ListNode | null,
  ): [min: ListNode | null, max: ListNode | null] => {
    const val1 = node1?.val ?? Infinity
    const val2 = node2?.val ?? Infinity
    return val1 <= val2 ? [node1, node2] : [node2, node1]
  }

  let [min, max] = getMinMax(list1, list2)
  let leftmostMin: ListNode | null = min

  const head = min

  while (min || max) {
    if (leftmostMin && leftmostMin != min) leftmostMin.next = min
    leftmostMin = min
    ;[min, max] = getMinMax(min?.next ?? null, max)
  }

  return head
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const getMinMax = (
    node1: ListNode | null,
    node2: ListNode | null,
  ): [min: ListNode | null, max: ListNode | null] => {
    const val1 = node1?.val ?? Infinity
    const val2 = node2?.val ?? Infinity
    return val1 <= val2 ? [node1, node2] : [node2, node1]
  }

  const [min, max] = getMinMax(list1, list2)

  const helper = (
    mergedHead: ListNode | null,
    mergedCurrentMin: ListNode | null,
    head2: ListNode | null,
  ): ListNode | null => {
    if (!mergedCurrentMin?.next && !head2) {
      return mergedHead
    }
    const [min, max] = getMinMax(mergedCurrentMin?.next ?? null, head2)
    if (mergedCurrentMin && mergedCurrentMin != min) {
      mergedCurrentMin.next = min
    }
    return helper(mergedHead, min, max)
  }

  return helper(min, min, max)
}
