export class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export const fromArray = (values: (number | null)[]): TreeNode | null => {
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

export const toArray = (root: TreeNode | null): (number | null)[] => {
  const result: (number | null)[] = [root?.val ?? null]
  const helper = (acc: (number | null)[] = [], root: TreeNode | null) => {
    if (!root) {
      return
    }
    const { left, right } = root
    result.push(left?.val ?? null)
    result.push(right?.val ?? null)
    helper(acc, left)
    helper(acc, right)
  }

  helper(result, root)

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] != null) {
      break
    }
    result.splice(i, 1)
  }

  return result
}
