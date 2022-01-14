import { Node } from '../data/NaryTree'

export function maxDepth(root: Node | null): number {
  if (!root) return 0
  if (!root.children.length) return 1
  return Math.max(...root.children.map((node) => maxDepth(node) + 1))
}
