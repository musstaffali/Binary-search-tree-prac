class Node {
    constructor(value) {
        this.value = value
        this.left - null
        this.right = null
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 0
    }

    size() {
        return this.count
    }

    insert(value) {
        this.count++

        let newNode = new Node(value)

        const searchTree = node => {
            // if value < node.value, go left 
            if (value < node.value) {
                // if no left child, append new node
                if (!node.left) {
                    node.left = newNode
                } 
                // if value > node.value, go right
                else {
                    searchTree(node.left)
                }
            }
            // if value > node.value, go right
            else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode
                }
                else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)
    }

    min() {
        let currentNode = this.root

            // continue traversing left until no more children
        while (currentNode.left) {
            currentNode = currentNode.left
        }

        return currentNode.value
    }

    max() {
        let currentNode = this.root

        while (currentNode.right) {
            currentNode = currentNode,right
        }

        return currentNode.value
    }

    contains() {

    }

    // depth first search

    // in-order
    dfsPreOrder(){

    }

    //pre-order
    dfsPreOrder(){
        
    }

    // post-order 
    dfsPreOrder(){
        
    }

    // breadth first search
    bfs() {

    }
}