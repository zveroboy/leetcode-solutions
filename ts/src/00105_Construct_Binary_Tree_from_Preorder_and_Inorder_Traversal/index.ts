import { TreeNode } from '../data/TreeNode'

export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  const root = new TreeNode(preorder[0])
  if (preorder.length < 2) {
    return root
  }

  const inorderRootIndex = inorder.indexOf(root.val)

  // We have left child
  if (preorder[0] !== inorder[0]) {
    const childInorder = inorder.slice(0, inorderRootIndex)
    const childPostorder = preorder.slice(1, childInorder.length + 1)

    root.left = buildTree(childPostorder, childInorder)
  }
  // We have right child
  if (preorder[0] !== inorder[inorder.length - 1]) {
    const childInorder = inorder.slice(inorderRootIndex + 1)
    const childPostorder = preorder.slice(-childInorder.length)

    root.right = buildTree(childPostorder, childInorder)
  }

  return root
}
