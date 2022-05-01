class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top] = element;
        this.top++;
    }
    pop() {
        this.top--;
        return this.dataStore[this.top];
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    length() {
        return this.top;
    }
    clear() {
        this.top = 0;
    }
    all() {
        const temp = [];
        console.log(this.top);

        for (let i = 0; i < this.top; i++) {
            temp.push(this.dataStore[i]);
        }
        return temp;
    }
}

const isPalindrome = (word) => {
    const s = new Stack();
    for (let i of word) {
        console.log(i);
        s.push(i);
    }
    let reverseWord = "";
    while (s.length() > 0) {
        reverseWord += s.pop();
    }
    console.log(word, reverseWord);
    if (reverseWord == word) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));