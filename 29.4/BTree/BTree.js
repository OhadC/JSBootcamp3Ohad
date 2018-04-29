exports.BTree = function () {
    const bTree = {
        root: null,
        add,
        search
    }
    return bTree

    function add(value) {
        let newNode = {
            value,
            right: null,
            parent: null,
            left: null,
        }

        if (!bTree.root) {
            bTree.root = newNode
            return
        }
        let currNode = bTree.root
        while (true) {
            if (value <= currNode.value) {
                if (currNode.right) {
                    currNode = currNode.right
                } else {
                    currNode.right = newNode
                    newNode.parent = currNode
                    return
                }
            } else {
                if (currNode.left) {
                    currNode = currNode.left
                } else {
                    currNode.left = newNode
                    newNode.parent = currNode
                    return
                }
            }
        }
    }

    function search(valueToSearch) {
        let node = getNode(valueToSearch)
        if (!node) {
            return null
        }

        const itr = {
            node,
            value,
            next,
        }
        return itr

        function value() {
            if (!itr.node) {
                throw new Error("No value at current position");
            }
            return itr.node.value;
        }

        function next() {
            let nextNode = itr.node
            if (!!nextNode.left) {
                nextNode = nextNode.left
                while (!!nextNode.right) {
                    nextNode = nextNode.right
                }
            } else {
                nextNode = nextNode.parent
                while (nextNode && nextNode.value < itr.node.value) {
                    nextNode = nextNode.parent
                }
                if(!nextNode){
                    return null
                }
            }
            itr.node = nextNode
            return itr
        }
    }

    function getNode(value) {
        let currNode = bTree.root
        while (currNode) {
            if (currNode.value === value) {
                return currNode
            } else if (currNode.value < value) {
                currNode = currNode.left
            } else {
                currNode = currNode.right
            }
        }
        return null
    }

}