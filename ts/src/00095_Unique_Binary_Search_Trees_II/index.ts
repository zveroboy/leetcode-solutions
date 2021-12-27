import { isValidBST } from '../00098_Validate_Binary_Search_Tree'
import { TreeNode, fromArray, toArray } from '../data/TreeNode'

const createCombinations = (n: number) => (val: number[]) => {
  const acc: number[][] = []
  let len = val.length
  while (len >= 0) {
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

class BST {
  root: TreeNode | null = null
  insert(value: number, parent = this.root) {
    const node = new TreeNode(value)
    if (!parent) {
      this.root = node
      return
    }
    if (value < parent.val) {
      if (parent.left) {
        this.insert(value, parent.left)
      } else {
        parent.left = node
      }
    } else if (value > parent.val) {
      if (parent.right) {
        this.insert(value, parent.right)
      } else {
        parent.right = node
      }
    }
  }
}

export function generateTrees(n: number): Array<TreeNode | null> {
  const nc = createNumberCombinations(n)

  const trees = nc.map((combination) => {
    const bst = new BST()
    for (const val of combination) {
      bst.insert(val)
    }
    return bst.root
  })

  const unique = new Set<string>(
    trees.map((tree) => JSON.stringify(toArray(tree))),
  )

  const result = [...unique]
    .map((ser) => fromArray(JSON.parse(ser)))
    .filter(isValidBST)

  return result
}
