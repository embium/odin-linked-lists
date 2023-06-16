import LinkedList from "./linkedList.js";

// Tests
const linkedList = LinkedList();

linkedList.append("test2");
linkedList.append("test3");
linkedList.prepend("test1");

console.log(linkedList.at(0));
console.log(linkedList.at(1));
console.log(linkedList.at(2));
linkedList.pop();
console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.contains("test2"));
console.log(linkedList.contains("test4"));
console.log(linkedList.find("test2"));
console.log(linkedList.find("test4"));
console.log(linkedList.toString());
