import { TreeNode } from 'data/TreeNode'

export function postorderTraversal(root: TreeNode | null): number[] {
  const helper = (acc: number[], tree: TreeNode | null) => {
    if (!tree) {
      return acc
    }

    helper(acc, tree.left)
    helper(acc, tree.right)
    acc.push(tree.val)

    return acc
  }

  return helper([], root)
}
