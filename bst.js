class Node{
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
        this.frequency = 0
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    // here we are inserting value into the bst 
    // we are keeping track of the frequency, if there is any repetition of the inserted number
    insert(val){
        let newNode = new Node(val)
        if(this.root === null) {
            this.root = newNode
            return this
        }
        else{
            let currentNode = this.root
            while(true){
                if(currentNode.value === val) {
                    currentNode.frequency++
                    return this
                }
                if(currentNode.value > val){
                    if(currentNode.left === null){
                        currentNode.left = newNode
                        return this
                    } else{
                        currentNode = currentNode.left
                    }
                }
                else if(currentNode.value < val){
                    if(currentNode.right === null){
                        currentNode.right = newNode
                        return this
                    } else{
                        currentNode = currentNode.right
                    }
                }
            }
        }
    }
    // find current node, if its present or not
    // here we are returning parent node of the found node
    find(val){
        let currentNode = this.root
        let parentNode = this.root
        let count = 0;
        if(currentNode === null){
            return false
        }else{
            while(currentNode){
                if(val == currentNode.value){
                    return {
                            currentNode:currentNode,
                            parentNode:parentNode
                        }
                }if(val > currentNode.value){
                    ++count
                    currentNode = currentNode.right
                    if(count%2 == 0){
                        parentNode = parentNode.right
                    }
                }else{
                    currentNode = currentNode.left
                    ++count
                    if(count%2 == 0){
                        parentNode = parentNode.left
                    }
                }
            }
            return {
                currentNode:currentNode, 
                parentNode:parentNode
            }

        }
    }

    // Tree-Traversal 
    // There are 4 ways to traverse the tree {BFS, DFS-Preorder, DFS-Postorder, DFS-Inorder}
    // this is implementation of BFS
    BFS(){
        let queue = new Array()
        let visited = new Array()
        let currentNode = this.root;
        queue.push(currentNode)

        while(queue.length){
            currentNode = queue.shift()
            visited.push(currentNode.value)
            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return visited
    }

    DFSPreorder(){
        let visited = new Array()
        let currentNode = this.root
        function preorderTravers(node){
            visited.push(node.value)
            if(node.left){
                preorderTravers(node.left)
            }
            if(node.right){
                preorderTravers(node.right)
            }
        }
        preorderTravers(currentNode)
        return visited
    }

    DFSPostorder(){}

    DFSInorder(){}
}

let Tree = new BinarySearchTree()
Tree.insert(10)
Tree.insert(7)
Tree.insert(5)
Tree.insert(4)
Tree.insert(8)
Tree.insert(6)

//console.log("Tree : ",JSON.stringify(Tree))
// console.group("Find : ",Tree.find(5))
// console.group("BFS : ",Tree.BFS())
console.log("DFSPreorder : ",Tree.DFSPreorder())
//          10
//        7
//      5   8
//    4   6 
  