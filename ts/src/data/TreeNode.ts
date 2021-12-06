export class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export const fromArray = (values: (number | null)[]): TreeNode | null => {
  const first = values[0]
  if (!first) {
    return null
  }

  const len = Math.log2(values.length + 1)
  let lim = 0
  const helper = (i: number, level: number) => {
    if (++lim > 10) {
      throw new Error('Too much')
    }
    const levelStart = 2 ** level - 1
    const nextLevelStart = 2 ** (level + 1) - 1
    const levelValues = values.slice(levelStart, nextLevelStart)
    const value = levelValues[i]
    if (!value) {
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
