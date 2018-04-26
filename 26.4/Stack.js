// class Stack{
//     constructor(){
//         this.head = null
//     }

//     push(data){
//         this.head = new Node(data, this.head)
//     }

//     pull(){
//         const answer = this.head.data
//         this.head = this.head.next
//         return answer
//     }
// }

// class Node{
//     constructor(data, next){
//         this.data = data
//         this.next = next
//     }
// }

function Stack() {
    this.head = null
    return {
        push: (data) => {
            this.head = new Node(data, this.head)
        },
        pull: () => {
            if (this.head) {
                const answer = this.head.data
                this.head = this.head.next
                return answer
            }
            return null
        }
    }
}

function Node(data, next) {
    return {
        data,
        next
    }
}

const stack = new Stack()
stack
stack.push(5)
stack.push(4)
stack
let answer = stack.pull()
answer
answer = stack.pull()
answer
stack
answer = stack.pull()
answer
