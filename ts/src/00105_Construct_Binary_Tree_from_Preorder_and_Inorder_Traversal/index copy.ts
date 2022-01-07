import { bfs } from 'data/Search'
import { TreeNode } from '../data/TreeNode'

type QueueItem = { tree: TreeNode; inorder: number[] }

const createTreeFiller = (getNextTree: () => TreeNode) => {
  return function* ({ tree, inorder }: QueueItem): Generator<QueueItem> {
    const inorderRootIndex = inorder.indexOf(tree.val)

    // There is left child
    if (inorderRootIndex > 0) {
      tree.left = getNextTree()
      yield {
        tree: tree.left,
        inorder: inorder.slice(0, inorderRootIndex),
      }
    }

    // There is right child
    if (inorderRootIndex >= 0 && inorderRootIndex < inorder.length - 1) {
      tree.right = getNextTree()
      yield {
        tree: tree.right,
        inorder: inorder.slice(inorderRootIndex + 1),
      }
    }
  }
}

const createTreeFactory = (preorderItr: Iterator<number>) => (): TreeNode => {
  const preorderResult = preorderItr.next()
  if (preorderResult.done) {
    throw new Error('Preorder itr is done too soon')
  }
  if (preorderResult.value == null) {
    throw new Error('Preorder itr item is empty')
  }
  return new TreeNode(preorderResult.value)
}

export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  const createTree = createTreeFactory(preorder[Symbol.iterator]())
  const root = createTree()

  const fillTree = createTreeFiller(createTree)
  const run = bfs<QueueItem>(function* (item) {
    yield* fillTree(item)
  })
  run({ tree: root, inorder })

  return root
}
