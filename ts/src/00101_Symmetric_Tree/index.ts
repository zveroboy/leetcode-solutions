import { TreeNode } from 'data/TreeNode'
import assert from 'assert'

export function isSymmetricRecursive(root: TreeNode | null): boolean {
  const helper = (
    acc: (number | null)[],
    tree: TreeNode | null,
    lr: boolean,
  ): (number | null)[] => {
    if (!tree) {
      acc.push(null)
      return acc
    }
    acc.push(tree.val)
    if (lr) {
      helper(acc, tree.left, lr)
      helper(acc, tree.right, lr)
    } else {
      helper(acc, tree.right, lr)
      helper(acc, tree.left, lr)
    }
    return acc
  }

  const leftResult = helper([], root?.left ?? null, true)
  const rightResult = helper([], root?.right ?? null, false)
  return leftResult.toString() === rightResult.toString()
}

export function isSymmetricQueue(root: TreeNode | null): boolean {
  const leftQueue: (TreeNode | null)[] = []
  const rightQueue: (TreeNode | null)[] = []
  leftQueue.push(root?.left ?? null)
  rightQueue.push(root?.right ?? null)
  while (leftQueue.length || rightQueue.length) {
    const leftNode = leftQueue.shift()
    const rightNode = rightQueue.shift()

    if (leftNode?.val !== rightNode?.val) {
      return false
    }

    if (leftNode) {
      leftQueue.push(leftNode.left ?? null)
      leftQueue.push(leftNode.right ?? null)
    }

    if (rightNode) {
      rightQueue.push(rightNode.right ?? null)
      rightQueue.push(rightNode.left ?? null)
    }
  }

  return true
}

export function isSymmetric(root: TreeNode | null): boolean {
  const traverse = function* (
    initRoot: TreeNode | null,
    lr: boolean,
  ): Generator<TreeNode | null> {
    const queue: (TreeNode | null)[] = [initRoot]
    while (queue.length) {
      const node = queue.shift()
      yield node ?? null
      if (node) {
        const add = lr ? [node.left, node.right] : [node.right, node.left]
        queue.splice(queue.length, 0, ...add)
      }
    }
  }

  const leftItr = traverse(root?.left ?? null, true)
  const rightItr = traverse(root?.right ?? null, false)

  while (true) {
    const leftResult = leftItr.next()
    const rightResult = rightItr.next()

    if (leftResult.done && rightResult.done) {
      break
    }

    if (leftResult?.value?.val !== rightResult?.value?.val) {
      return false
    }
  }

  return true
}
