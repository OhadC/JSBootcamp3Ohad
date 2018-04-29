class BinaryTree {
    constructor() {
        this.head = null
    }

    add(data) {
        const nodeToAdd = new Node(data)
        if (!this.head) {
            this.head = nodeToAdd
            return
        }
        let currNode = this.head
        while (true) {
            if (data <= currNode.data) {
                if(currNode.right){
                    currNode = currNode.right
                } else{
                    currNode.right = nodeToAdd
                    return
                }
            } else {
                if(currNode.left){
                    currNode = currNode.left
                } else{
                    currNode.left = nodeToAdd
                    return
                }
            }
        }
    }
    search(data) {
        let currNode = this.head
        while (currNode) {
            if (currNode.data === data) {
                return currNode
            } else if (currNode.data < data) {
                currNode = currNode.left
            } else {
                currNode = currNode.right
            }
        }
        return null
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

const binaryTree = new BinaryTree()
binaryTree.add(2)
binaryTree.add(1)
binaryTree.add(3)
binaryTree.add(4)
binaryTree.add(1.5)
binaryTree.add(1)

binaryTree

console.log(binaryTree.search(3))
