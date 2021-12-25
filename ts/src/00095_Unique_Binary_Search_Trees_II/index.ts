import { preorderTraversal } from '00144_Binary_Tree_Preorder_Traversal'
import { TreeNode, fromArray } from 'data/TreeNode'

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

const numberCombinations = (n: number): number[][] => {
  if (n < 2) {
    return [[n]]
  }

  const createCombinationsWith = createCombinations(n)

  return numberCombinations(n - 1).reduce<number[][]>(
    (acc, val) => acc.concat(createCombinationsWith(val)),
    [],
  )
}

const cloneTree = (root: TreeNode) => {
  return fromArray(preorderTraversal(root))
}

const genFullTrees = (level: number) => {
  let variations: TreeNode[] = []

  const root = new TreeNode(level)

  // const cloneCurTree = cloneTree(root)

  const grow = function* (root: TreeNode) {
    const visited = new Set<TreeNode>()
    const stack: TreeNode[] = [root]
    while (stack.length) {
      const node = stack[stack.length - 1]
      visited.add(node)
      const { left, right } = node

      // We've reached the bottom
      if (!left && !right) {
        yield cloneTree(root)
        stack.pop()
      }
    }
    // const helper = () => {

    // }
  }

  let l = 0
  while (l < level) {
    variations = variations.reduce((acc, variation) => {
      variation
      return acc
    }, [])
    l++
  }

  // const helper = (root: TreeNode, l: number) => {
  //   if (l === 0) {
  //     cloneCurTree()
  //     return
  //   }

  //   const left = new TreeNode(level - l)
  //   const right = new TreeNode(level - l)

  // root.left = left
  // helper(left, l - 1)
  // root.left = null
  // root.right = right
  // helper(right, l - 1)

  // if(l > 1){
  //   root.left = left
  //   helper(left, l - 1)
  //   root.right = right
  //   helper(right, l - 1)
  // }
  // }

  return helper(root, level - 1)
}

export function generateTrees(n: number): Array<TreeNode | null> {
  const h = numberCombinations(n)
  const itr = h[Symbol.iterator]()
  // const next = itr.next()
  const helper = (root: TreeNode, n: number) => {}
  console.log({ h })
  return []
}
