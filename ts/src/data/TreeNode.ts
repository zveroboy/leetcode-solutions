import { ArrayQueue } from './Queue'

export class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export const fromArray_ = (values: (number | null)[]): TreeNode | null => {
  const first = values[0]
  if (first == null) {
    return null
  }

  const len = Math.log2(values.length + 1)
  let lim = 0
  const helper = (i: number, level: number) => {
    if (++lim > 100) {
      throw new Error('Too much')
    }
    const levelStart = 2 ** level - 1
    const nextLevelStart = 2 ** (level + 1) - 1
    const levelValues = values.slice(levelStart, nextLevelStart)
    const value = levelValues[i]
    if (value == null) {
      return null
    }
    const tree = new TreeNode(value)
    if (level + 1 >= len) {
      return tree
    }
    tree.left = helper(2 * i, level + 1)
    tree.right = helper(2 * i + 1, level + 1)
    return tree
  }

  return helper(0, 0)
}

const createTreeFactory =
  (valuesItr: Iterator<number | null>) => (): TreeNode | null => {
    const valueResult = valuesItr.next()
    if (valueResult.done) {
      return null
    }
    if (valueResult.value == null) {
      return null
    }
    return new TreeNode(valueResult.value)
  }

export const fromArray = (values: (number | null)[]): TreeNode | null => {
  const createTree = createTreeFactory(values[Symbol.iterator]())
  const root = createTree()
  if (values.length === 0 || !root) {
    return null
  }
  const queue = new ArrayQueue<TreeNode>()
  queue.enqueue(root)

  while (!queue.isEmpty()) {
    const tree = queue.dequeue()
    if (!tree) throw new Error('wrong structure')
    tree.left = createTree()
    tree.right = createTree()
    if (tree.left) queue.enqueue(tree.left)
    if (tree.right) queue.enqueue(tree.right)
  }

  return root
}

export const toArray = (root: TreeNode | null): (number | null)[] => {
  const result: (number | null)[] = [root?.val ?? null]
  const queue = new ArrayQueue<TreeNode>()
  if (root) {
    queue.enqueue(root)
  }

  while (!queue.isEmpty()) {
    const tree = queue.dequeue()
    if (!tree) throw new Error('wrong structure')
    result.push(tree.left?.val ?? null)
    result.push(tree.right?.val ?? null)
    if (tree.left) queue.enqueue(tree.left)
    if (tree.right) queue.enqueue(tree.right)
  }

  while (result.length > 0 && result[result.length - 1] == null) {
    result.pop()
  }

  return result
}
