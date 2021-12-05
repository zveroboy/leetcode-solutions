export class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

export const fromArray = (arr: number[]): ListNode | null => {
  let head: ListNode | null = null

  for (let cur: ListNode | undefined, i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i])

    if (!cur) {
      head = node
    } else {
      cur.next = node
    }

    cur = node
  }

  return head
}

export const toArray = (head: ListNode | null): number[] =>
  head ? [...toGenerator(head)].map((node) => node.val) : []

export const createCycle = (arr: number[], pos: number): ListNode | null => {
  const head = fromArray(arr)

  if (!head || pos < 0) {
    return head
  }

  let entryNode: ListNode | undefined
  for (let cur = head, i = 0; ; i++) {
    if (i === pos) {
      entryNode = cur
    }

    if (cur.next) {
      cur = cur.next
      continue
    }

    if (!entryNode) {
      throw new Error('Wrong index')
    }

    cur.next = entryNode
    break
  }

  return head
}

type Intersected = [ListNode, ListNode]

export const createIntersected = (
  intersectVal: number,
  listA: number[],
  listB: number[],
  skipA: number,
  skipB: number,
): Intersected => {
  if (!listA.length || !listB.length) {
    throw new Error('Empty input array')
  }

  const sharedA = listA.splice(skipA)
  const sharedB = listB.splice(skipB)

  const headA = fromArray(listA)
  const headB = fromArray(listB)

  if (!intersectVal) {
    const heads = [headA, headB]

    if (!heads.every(Boolean)) {
      throw new Error('Broken list')
    }

    return heads as Intersected
  }

  if (JSON.stringify(sharedA) !== JSON.stringify(sharedB)) {
    throw new Error('Parts that should be shared are not equal')
  }

  if (sharedA[0] !== intersectVal) {
    throw new Error('Shared part start value is not equal to intersectVal')
  }

  const shared = fromArray(sharedA)

  if (!shared) {
    throw new Error('Broken shared list')
  }

  const result: [ListNode, ListNode] = [shared, shared]

  if (!shared) {
    throw new Error('Broken shared list')
  }

  if (headA) {
    for (let cur = headA; ; cur = cur.next!) {
      if (!cur.next) {
        cur.next = shared
        break
      }
    }
    result[0] = headA
  }

  if (headB) {
    for (let cur = headB; ; cur = cur.next!) {
      if (!cur.next) {
        cur.next = shared
        break
      }
    }
    result[1] = headB
  }

  return result
}

export function* toGenerator(head: ListNode): Generator<ListNode> {
  for (let cur: ListNode | null = head; cur; cur = cur.next) {
    yield cur
  }
}
