import { Node, fromArray, toArray } from '../data/NaryTree'

export class Codec {
  // Encodes a tree to a single string.
  serialize(root: Node | null): string {
    return JSON.stringify(toArray(root))
  }

  // Decodes your encoded data to tree.
  deserialize(data: string): Node | null {
    return fromArray(JSON.parse(data))
  }
}
