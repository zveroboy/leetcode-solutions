import { ListNode } from '../data/ListNode'

export function oddEvenList(head: ListNode | null): ListNode | null {
  const headNext = head?.next ?? null
  let extremeOdd: ListNode | null = head
  let extremeEven: ListNode | null = headNext

  // let node: ListNode | null = head
  while (extremeOdd) {
    // Find next
    const nextExtremeOdd = extremeEven?.next ?? null
    const nextExtremeEven = nextExtremeOdd?.next ?? null

    // Links change
    if (nextExtremeOdd) extremeOdd.next = nextExtremeOdd
    if (extremeEven) extremeEven.next = nextExtremeEven

    // Reassingment
    extremeOdd = nextExtremeOdd
    if (extremeOdd) extremeOdd.next = headNext
    extremeEven = nextExtremeEven
  }
  return head
}
