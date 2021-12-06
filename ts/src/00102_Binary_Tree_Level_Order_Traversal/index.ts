import { TreeNode } from 'data/TreeNode'

export default function levelOrder(root: TreeNode | null): number[][] {
  const acc: number[][] = []
  const helper = (acc: number[][], tree: TreeNode | null, level: number) => {
    if (!tree) {
      return
    }
    acc[level] ??= []
    acc[level].push(tree?.val)
    const nextLevel = level + 1
    helper(acc, tree.left, nextLevel)
    helper(acc, tree.right, nextLevel)
  }
  helper(acc, root, 0)
  return acc
}
