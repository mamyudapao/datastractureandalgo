class Dictionary {
    constructor() {
        this.dataStore = new Array();
    }
    add(key, value) {
        this.dataStore[key] = value;
    }
    find(key) {
        return this.dataStore[key];
    }
    remove(key) {
        delete this.dataStore[key];
    }
}

var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log(pbook.find("Mike"));