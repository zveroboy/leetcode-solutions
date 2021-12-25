import { TreeNode } from '../data/TreeNode'

interface Queue<T> {
  isEmpty(): boolean
  enqueue(item: T): void
  dequeue(): T | undefined
  head(): T | undefined
}

type QueueItem = { tree: TreeNode; inorder: number[] }

const createTreeFiller = (getNextTree: () => TreeNode) => {
  return function* ({ tree, inorder }: QueueItem): Generator<QueueItem> {
    const inorderRootIndex = inorder.indexOf(tree.val)

    // There is left child
    if (inorderRootIndex > 0) {
      tree.left = getNextTree()
      yield {
        tree: tree.left,
        inorder: inorder.slice(0, inorderRootIndex),
      }
    }

    // There is right child
    if (inorderRootIndex >= 0 && inorderRootIndex < inorder.length - 1) {
      tree.right = getNextTree()
      yield {
        tree: tree.right,
        inorder: inorder.slice(inorderRootIndex + 1),
      }
    }
  }
}

class TreeQueue implements Queue<QueueItem> {
  queue: QueueItem[] = []
  isEmpty() {
    return this.queue.length > 0
  }
  enqueue(item: QueueItem) {
    this.queue.push(item)
  }
  dequeue(): QueueItem | undefined {
    return this.queue.shift()
  }
  head(): QueueItem | undefined {
    return this.queue[0]
  }
}

const createTreeFactory = (preorderItr: Iterator<number>) => (): TreeNode => {
  const preorderResult = preorderItr.next()
  if (preorderResult.done) {
    throw new Error('Preorder itr is done too soon')
  }
  if (preorderResult.value == null) {
    throw new Error('Preorder itr item is empty')
  }
  return new TreeNode(preorderResult.value)
}

export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  const createTree = createTreeFactory(preorder[Symbol.iterator]())
  const root = createTree()
  const queue = new TreeQueue()
  const fillTree = createTreeFiller(createTree)

  queue.enqueue({ tree: root, inorder })
  while (queue.isEmpty()) {
    const item = queue.dequeue()
    if (item == null) throw new Error('Queue item is empty')

    for (const newItem of fillTree(item)) {
      queue.enqueue(newItem)
    }
  }

  return root
}
