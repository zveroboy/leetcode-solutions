import { TreeNode } from '../data/TreeNode'

export function buildTree(
  inorder: number[],
  postorder: number[],
): TreeNode | null {
  const rootValue = postorder[postorder.length - 1]
  const root = new TreeNode(rootValue)
  if (postorder.length < 2) {
    return root
  }

  const inorderRootIndex = inorder.indexOf(rootValue)

  // We have left child
  if (postorder[postorder.length - 1] !== inorder[0]) {
    const childInorder = inorder.slice(0, inorderRootIndex)
    const childPostorder = postorder.slice(0, childInorder.length)

    root.left = buildTree(childInorder, childPostorder)
  }
  // We have right child
  if (postorder[postorder.length - 1] !== inorder[inorder.length - 1]) {
    const childInorder = inorder.slice(inorderRootIndex + 1)
    const childPostorder = postorder.slice(-childInorder.length - 1, -1)

    root.right = buildTree(childInorder, childPostorder)
  }

  return root
}
