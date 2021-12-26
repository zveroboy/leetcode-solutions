import { fromArray, toArray, TreeNode } from '../data/TreeNode'

export function serialize(root: TreeNode | null): string {
  return JSON.stringify(toArray(root))
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  return fromArray(JSON.parse(data))
}
