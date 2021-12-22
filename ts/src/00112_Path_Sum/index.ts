import { TreeNode } from 'data/TreeNode'

export function hasPathSumGen(
  root: TreeNode | null,
  targetSum: number,
): boolean {
  if (!root) {
    return false
  }

  const getSum = function* (root: TreeNode): Generator<number> {
    const visited = new Set<TreeNode>()
    const stack: TreeNode[] = [root]
    let node: TreeNode = root
    while (stack.length) {
      node = stack[stack.length - 1]
      visited.add(node)
      const { left, right } = node

      // We've reached the bottom
      if (!left && !right) {
        yield stack.map((node) => node.val).reduce((a, b) => a + b)
        stack.pop()
        continue
      }

      if (left && !visited.has(left)) {
        stack.push(left)
        continue
      }

      if (right && !visited.has(right)) {
        stack.push(right)
        continue
      }

      stack.pop()
    }
  }

  for (const val of getSum(root)) {
    if (val === targetSum) return true
  }

  return false
}

export function hasPathSumLoop(
  root: TreeNode | null,
  targetSum: number,
): boolean {
  if (!root) {
    return false
  }

  const visited = new Set<TreeNode>()
  const stack: TreeNode[] = [root]
  let node: TreeNode = root
  while (stack.length) {
    node = stack[stack.length - 1]
    visited.add(node)
    const { left, right } = node

    // We've reached the bottom
    if (!left && !right) {
      const sum = stack.map((node) => node.val).reduce((a, b) => a + b)
      if (sum === targetSum) return true
      stack.pop()
      continue
    }

    if (left && !visited.has(left)) {
      stack.push(left)
      continue
    }

    if (right && !visited.has(right)) {
      stack.push(right)
      continue
    }

    stack.pop()
  }

  return false
}

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false
  }

  const { left, right, val } = root

  const sum = targetSum - val

  if (!left && !right && sum === 0) {
    return true
  }

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}
