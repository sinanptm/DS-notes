class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return [];
            }
            node = node.children.get(char);
        }
        return this.collectWords(node, word);
    }

    collectWords(node, prefix) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (const [char, child] of node.children) {
            words = words.concat(this.collectWords(child, prefix + char));
        }
        return words;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return [];
            }
            node = node.children.get(char);
        }
        return this.collectWords(node, prefix);
    }

    delete(word) {
        this.deleteRecursive(this.root, word, 0);
    }

    deleteRecursive(node, word, index) {
        if (index === word.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return node.children.size === 0;
        }
        const char = word[index];
        if (!node.children.has(char)) return false;
        const shouldDeleteCurrentNode = this.deleteRecursive(node.children.get(char), word, index + 1);
        if (shouldDeleteCurrentNode) {
            node.children.delete(char);
            return node.children.size === 0;
        }
        return false;
    }

    log() {
        console.log(JSON.stringify(this.root, this.stringifyTrie, 2));
    }

    stringifyTrie(key, value) {
        if (key === "children") {
            return Object.fromEntries(value);
        }
        return value;
    }
}



// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apple");
trie.insert("app");
trie.insert('sinan')
trie.insert('muhammed')
trie.insert('muhaaa')
trie.insert('ssss')
trie.insert('sssss')
console.log(trie.search("app"));     // true
console.log(trie.search("s"));     // false
trie.log();
