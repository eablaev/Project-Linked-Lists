

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    append(value) {
        let newNode = new Node(value); 
        if(!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }
    prepend(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            newNode.nextNode = currentNode;
            this.head = newNode
        }

    }
    size() {
        let size = 0;
        let currentNode = this.head;
        while(currentNode) {
            size ++;
            currentNode = currentNode.nextNode
        }
        return size;
    }
    _head() {
        console.log(this.head)
    }
    tail() {
        let tail;
        let currentNode = this.head;
        while(currentNode) {
            tail = currentNode;
            currentNode = currentNode.nextNode;
        }
        console.log("Tail is "+tail)
    }
    at(index) {
        if(index === 0) {
            return this.head
        } else {
            let currentNode = this.head;
            while(index > 0) {
                currentNode = currentNode.nextNode;
                index--;

            }
            return currentNode
        }

    }
    pop() { 
        let length = this.size();
        let newLastNode = this.at(length -2);
        newLastNode.nextNode = null;
    
    }
    contains(value) {
        if(!this.head) {
            return false
        }
        let currentNode = this.head;
        while(currentNode) {
           if(currentNode.value === value) {
            return true
           }
            currentNode = currentNode.nextNode
        }
        return false
    }
    find(value) {
        if(!this.head) {
            return null
        }
        let currentNode = this.head;
        let index = 0;
        while(currentNode) {
            if(currentNode.value === value) {
                return index;
            } 
            currentNode = currentNode.nextNode;
            index ++;
        }
        return null
    }
    toString() {
        let str = '';
        let currentNode = this.head;
        while(currentNode) {
            str = str + currentNode.value + " -> "
            currentNode = currentNode.nextNode;
        }
        return str+'null'

    }
    insertAt(value, insertIndex) {
        let index = 0;
        let newNode = new Node(value);
        if(!this.head) { 
            this.head = newNode;
        } else {
            if(insertIndex >= this.size()) {
                let currentNode = this.head;
                while(currentNode.nextNode) {
                    currentNode = currentNode.nextNode;
                }
                currentNode.nextNode = newNode;
            } else if(insertIndex === 0) {
                let currentNode = this.head
                newNode.nextNode = currentNode;
                this.head = newNode;
            } else {
                let currentNode = this.head;
                while(index !== insertIndex-1) {
                    currentNode = currentNode.nextNode;
                    index++
                }
                console.log("index at insert index is "+currentNode.value);
                newNode.nextNode = currentNode.nextNode
                currentNode.nextNode = newNode;
            }
        }
    }
    removeAt(removeIndex) {
        let index = 0;
        let beforeNode = this.head;
        if(removeIndex === 0) {
            this.head = beforeNode.nextNode;
            return
        }
        if(removeIndex+1 > this.size()) {
            return
        }
        while (removeIndex !== index+1) {
            beforeNode = beforeNode.nextNode;
            index++; 
        }
        
        let currentNode = beforeNode.nextNode;
        let afterNode = currentNode.nextNode;
        beforeNode.nextNode = afterNode;
        
       

    }
}
const myList = new LinkedList();
myList.append(5)
myList.append(10);
myList.append(20);
// myList.insertAt(15,0)
myList.removeAt(3)
console.log(myList.toString());

// myList.prepend(1)
// myList.prepend(0.5)
console.log("Size: "+myList.size())
// myList._head();
// myList.tail();
// myList.at(3);
// myList.pop()
// console.log(myList.contains(50))
// console.log(myList.find(10))
// console.log(myList.toString())

