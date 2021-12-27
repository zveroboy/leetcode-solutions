import { ArrayQueue } from '../data/Queue'
import { TreeNode, fromArray, toArray } from '../data/TreeNode'

let i = 0

const createCombinations = (n: number) => (val: number[]) => {
  const acc: number[][] = []
  let len = val.length
  while (len >= 0) {
    if (i++ > 100) throw new Error('too many')
    const res = [...val]
    res.splice(len, 0, n)
    acc.push(res)
    len--
  }
  return acc
}

const createNumberCombinations = (n: number): number[][] => {
  if (n < 2) {
    return [[n]]
  }

  const createCombinationsWith = createCombinations(n)

  return createNumberCombinations(n - 1).reduce<number[][]>(
    (acc, val) => acc.concat(createCombinationsWith(val)),
    [],
  )
}

const cloneTree = (root: TreeNode) => {
  const arr = toArray(root)
  return fromArray(arr)
}

const growTree = (root: TreeNode): TreeNode[] => {
  const acc: TreeNode[] = []
  const queue = new ArrayQueue<TreeNode>()

  const cloneRoot = () => {
    const clonedRoot = cloneTree(root)
    if (!clonedRoot) throw new Error('something went wrong')
    acc.push(clonedRoot)
  }

  queue.enqueue(root)

  while (!queue.isEmpty()) {
    const tree = queue.dequeue()
    if (!tree) throw new Error('wrong structure')

    if (tree.left) {
      queue.enqueue(tree.left)
    } else {
      tree.left = createDummyTreeNode()
      cloneRoot()
      tree.left = null
    }

    if (tree.right) {
      queue.enqueue(tree.right)
    } else {
      tree.right = createDummyTreeNode()
      cloneRoot()
      tree.right = null
    }
  }

  return acc
}

const REPLACE_NUMBER = 1e7 - 1
const createDummyTreeNode = () => new TreeNode(REPLACE_NUMBER)

const createTreeCombinations = (n: number): TreeNode[] => {
  if (n < 2) {
    return [createDummyTreeNode()]
  }

  const acc = createTreeCombinations(n - 1).reduce<TreeNode[]>(
    (acc, val) => acc.concat(growTree(val)),
    [],
  )
  const unique = new Set<string>(
    acc.map((tree) => JSON.stringify(toArray(tree))),
  )
  return [...unique]
    .map((ser) => fromArray(JSON.parse(ser)))
    .filter((tree): tree is TreeNode => !!tree)
}

export function generateTrees(n: number): Array<TreeNode | null> {
  const nc = createNumberCombinations(n)
  const tc = createTreeCombinations(n)

  const result = tc
    .map(toArray)
    .map((arr, i) => {
      const combinationItr = nc[i]?.[Symbol.iterator]()
      if (!combinationItr) {
        throw new Error('Combnation incorrect index')
      }
      return arr.map((val) => (val ? combinationItr.next().value : val))
    })
    .map(fromArray)

  return result
}

function* zip<T>(...iterables: Iterable<T>[]): Generator<T[]> {
  const iterators = iterables.map((i) => i[Symbol.iterator]())
  while (true) {
    const results = iterators.map((iter) => iter.next())
    if (results.some((res) => res.done)) return
    else yield results.map((res) => res.value)
  }
}
