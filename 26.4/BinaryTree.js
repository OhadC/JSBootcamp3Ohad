class BunaryTree {
    constructor() {
        this.head = null
    }

    add(data) {
        let currNode = this.head
        const nodeToAdd = data
        while (!(currNode)) {
            if (currNode.data <= data) {
                currNode = currNode.left
            } else {
                currNode = currNode.right
            }
        }
        currNode = nodeToAdd
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
