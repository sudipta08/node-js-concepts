class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    rotate(rotateBy) {
        const list1 = new SinglyLinkedList();
        const rotatedList = new SinglyLinkedList();
        
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i < rotateBy) {
                list1.push(currentNode.val);
            } else {
                rotatedList.push(currentNode.val);
            }
            currentNode = currentNode.next;
        }
        
        rotatedList.tail.next = list1.head;
        rotatedList.tail = list1.tail;
        
        this.head = rotatedList.head;
        this.tail = rotatedList.tail;
        this.length = list1.length + rotatedList.length;
    }
}



var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(3);