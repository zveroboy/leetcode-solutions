import { ListNode } from '../data/ListNode'

const traverse = function* (
  list1: ListNode | null,
  list2: ListNode | null,
): Generator<number> {
  let node1: ListNode | null = list1
  let node2: ListNode | null = list2

  do {
    const val1 = node1?.val ?? 0
    const val2 = node2?.val ?? 0

    yield val1 + val2
    node1 = node1?.next ?? null
    node2 = node2?.next ?? null
  } while (node1 || node2)
}

const createList = () => {
  let head: ListNode | null = null
  let tail: ListNode | null = null
  const addNode = (node: ListNode | null) => {
    if (!head) {
      head = node
      tail = node
    } else if (tail) {
      tail.next = node
      tail = node
    }
  }
  return {
    get head() {
      return head
    },
    addNode,
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const list = createList()
  let sum = 0
  for (const val of [...traverse(l1, l2)]) {
    sum += val

    const d = sum % 10
    sum -= d
    sum /= 10
    list.addNode(new ListNode(d))
  }

  if (sum) {
    list.addNode(new ListNode(sum))
  }

  return list.head
}
