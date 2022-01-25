import { TreeNode } from '../data/TreeNode'

const detachNextGreater = (root: TreeNode | null): TreeNode | null => {
  if (!root || !root?.left) {
    return root
  }

  if (root && !root.left?.left) {
    const result = root.left
    root.left = deleteNode(root.left, root.left.val)
    return result
  }

  return detachNextGreater(root.left)
}

export function deleteNode(
  root: TreeNode | null,
  key: number,
): TreeNode | null {
  if (!root) return root

  if (root.val > key) {
    root.left = deleteNode(root.left, key)
    return root
  }

  if (root.val < key) {
    root.right = deleteNode(root.right, key)
    return root
  }

  const newRoot = detachNextGreater(root.right)

  if (newRoot) {
    newRoot.left = root.left
    if (newRoot !== root.right) newRoot.right = root.right
  }

  return newRoot ?? root.left ?? null
}
