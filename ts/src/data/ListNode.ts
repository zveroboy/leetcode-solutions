export class ListNode {
  //   val: number
  //   next: ListNode | null
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

export const create = (arr: number[], pos: number): ListNode => {
  let head: ListNode | undefined
  let last: ListNode | undefined

  for (let cur: ListNode | undefined, i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i])

    if (!cur) {
      head = node
    } else {
      cur.next = node
    }

    cur = node
    last = node
  }

  if (!head || !last) {
    throw new Error('Broken list')
  }

  for (let cur = head, i = 0; i <= pos; i++) {
    if (i === pos) {
      last.next = cur
      break
    }

    if (!cur.next) {
      throw new Error('Broken list')
    }
    cur = cur.next
  }

  return head
}
