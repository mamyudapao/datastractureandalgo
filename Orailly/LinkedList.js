class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = new Node("head");
    }
    find(item) {
        var currentNode = this.head;
        while (currentNode.element != item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    remove() {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
    findPrevious(item) {
        var currNode = this.head;
        while (!(currNode.next = null) && currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}

var cities = new List();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();