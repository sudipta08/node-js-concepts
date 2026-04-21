// linked list is a data structure which is used to hold data
// every element is a node which points to the next element/node
// first element is called head and the last one is tail
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push a new element into the list
    // time complexity - O(1)
    // it doesn't matter how long the list is
    // we point the current tail to new element and make the new element the new tail
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node; // current tail will point to the new node
        }
        this.tail = node; // new node will be the new tail
        this.length++;
        // console.log(this);
    }

    // pop removes the last element from the list
    // time complexity - O(n)
    // we need to go through the whle list and make the second last element the tail
    pop() {
        // list is empty
        if (!this.head) return 'Nothing to pop';

        // if one element is there
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // we need to remove the last element, that means the second last element needs to be marked as the tail
            // we keep two pointers
            let currentNode = this.head; // always hold the next element in list
            let newTail = null; // hold the previous element, which is, one element below the current one

            // we will loop until there is a next element
            while(currentNode.next) {
                newTail = currentNode;
                currentNode = currentNode.next;
            }

            console.log(`Popped node: ${JSON.stringify(currentNode)}`);

            this.tail = newTail;
            this.tail.next = null;
        }

        this.length--;

        return this;
    }
    
    // shift removes an element from the beginning of list
    // time complexity - O(1)
    // we need to make the second element head of the list
    shift() {
        if (!this.head) return console.log('Nothing to shift');

        if (this.length === 1) {
            this.tail = null;
        }

        this.head = this.head.next;

        this.length--;

        console.log(this);
    }

    // unshift adds an element at the beginning of list
    // time complexity - O(1)
    // it doesn't matter how long the list is
    // new element points to the current head and becomes the new head
    unshift(val) {
        const node = new Node(val);

        if (!this.length) { // list is empty
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        console.log(this);
    }

    // get retrieves the element at said index of the list
    // time complexity - O(n)
    get(index) {
        if (index < 0 || index >= this.length) {
            return 'Invalid index';
        }

        let currentNode = this.head;
        let counter = 0;
        while (counter !== index) {
            counter++;
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    // set is used to update the value of a node at certain index
    set(index, value) {
        const node = this.get(index);
        if (node === 'Invalid index') {
            return node;
        }
        node.val = value;
        console.log(this);
    }

    // insert a new node in the list at a specific position
    // time complexity - O(n)
    // based on the index provided, we may have to traverse the whole list for inserting the elemnt
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return 'Invalid index';
        }
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);

        const newNode = new Node(val);
        // lines 131 to 136 can also be replaced by this.get(index - 1)
        let currentNode = this.head;
        let counter = 0;
        while (counter < index - 1) {
            counter++;
            currentNode = currentNode.next;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;

        this.length++;
        console.log(this);
    }

    // remove an element from the specified index
    // time complexity - O(n)
    // we have to traverse the list
    remove(index) {
        if (index < 0 || index > this.length - 1) return console.log('Invalid index');
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const previousNode = this.get(index - 1);
        const removedNode = previousNode.next;
        previousNode.next = previousNode.next.next;

        this.length--;
        console.log(this);
        return removedNode;
    }

    // reverse a linked list
    reverse() {
        // swap the head and tail
        let currentNode = this.head; // this will hold the actual list, which we are going to loop through
        this.head = this.tail;
        this.tail = currentNode;

        // current node should point to the next of previous node
        let previous = null;
        let next = null; // hold next of the current node of the original list
        while (currentNode) {
            next = currentNode.next;
            currentNode.next = previous;
            previous = currentNode;
            currentNode = next;
        }
        console.log(this);
        return this;
    }
}

const list = new LinkedList();
list.push(10);
list.push(20);
list.push(50);
// console.log(list.pop());
// list.shift();
// list.unshift(100);
// list.unshift(200);
// console.log(list.get(1));
// list.set(1, 89);
// list.insert(0, 23);
// list.insert(0, 56);
// list.insert(1, 89);
// console.log(list.remove(1));
list.reverse();

//----------------|-------------------------------------------|---------------------------------------|
//                |                   ARRAY                   |               LINKED LIST             |
//----------------|-------------------------------------------|---------------------------------------|
// INSERTION      |                                           |                                       |
//----------------|-------------------------------------------|---------------------------------------|
// push           |                   O(1)                    |                   O(1)                |
// unshift        |O(n) -> whole array needs to be re-indexed |                   O(1)                |
// other index    |  O(n) -> array needs to be re-indexed     |                   O(n)                |
//----------------|-------------------------------------------|---------------------------------------|
// DELETION       |                                           |                                       |
//----------------|-------------------------------------------|---------------------------------------|
// pop            |                   O(1)                    |                   O(n)                |
// shift          |O(n) -> whole array needs to be re-indexed |                   O(1)                |
// other index    |  O(n) -> array needs to be re-indexed     |                   O(n)                |
//----------------|-------------------------------------------|---------------------------------------|
// SEARCH (index) |   O(1) as the search is based on index    |                   O(n)                |
//----------------|-------------------------------------------|---------------------------------------|

// insertions and removals are faster in linked lists than arrays (for most cases)
// but arrays perform faster when we need to look for an element based on index

// pop and remove -> we keep two pointers to keep track of the current node and previous node
// for pop, previous node becomes the new tail
// for remove, previous node points to the next of current node