/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root) return 0
    let total = this.root.val

    function sum(node){
      // loop through every child for that node
      for(let child of node.children){
        // add all values
        total += child.val
      
      // if that node has any children
      if(child.children.length > 0){
        sum(child)
      }
      }}
    sum(this.root)
    return total

    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0
    let countedEvans = 0
     if(this.root.val % 2 === 0){
      countedEvans++
     }

    function count(node){
      for (let child of node.children){
        if (child.val % 2 === 0){
          countedEvans++
        }
        if(child.children.length > 0){
          count(child)
        }
      }
    }
    count(this.root)
    return countedEvans
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0

    let greaterNumCount = 0

    if(this.root.val > lowerBound){
      greaterNumCount++
    }
    function count(node){
      for(let child of node.children){
        if(child.val > lowerBound){
          greaterNumCount++
        }
        if(child.children.length > 0){
          count(child)
        }
      }
    }
    count(this.root)
    return greaterNumCount
  }
}

module.exports = { Tree, TreeNode };
