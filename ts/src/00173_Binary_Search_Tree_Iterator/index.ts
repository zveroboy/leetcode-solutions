import { TreeNode } from '../data/TreeNode'

const inorderTraversal = function* (root: TreeNode | null): Generator<number> {
  if (!root) return
  yield* inorderTraversal(root.left)
  yield root.val
  yield* inorderTraversal(root.right)
}

export class BSTIterator {
  pointer: number
  arrItr: Iterator<number | null>
  constructor(root: TreeNode | null) {
    const array = [...inorderTraversal(root)]
    this.pointer = array.length
    this.arrItr = array[Symbol.iterator]()
  }

  next(): number {
    const result = this.arrItr.next()
    this.pointer--

    if (result.done) {
      throw new Error('done too early')
    }

    if (result.value == null) {
      throw new Error('wrong strurcture')
    }

    return result.value
  }

  hasNext(): boolean {
    return this.pointer > 0
  }
}
