/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function traverse(result: number[], root: Node | null): void {
  if (root) {
    result.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
      traverse(result, root.children[i]);
    }
  } else {
    return;
  }
}

function preorder(root: Node | null): number[] {
  const result = [];
  traverse(result, root);
  return result;
}
