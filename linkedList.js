let Node = (value) => {
  return {
    value: null || value,
    nextNode: null,
  };
};

let LinkedList = () => {
  return {
    head: null,
    prepend(value) {
      let node = Node(value);
      if (this.head == null) this.head = node;
      else {
        let previous = this.head;
        this.head = node;
        this.head.nextNode = previous;
      }
    },
    append(value) {
      if (this.head == null) this.prepend(value);
      else {
        let node = Node(value);
        let current = this.head;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = node;
      }
    },
    size() {
      let counter = 0;
      let current = this.head;
      while (current) {
        counter++;
        current = current.nextNode;
      }
      return counter;
    },
    at(index) {
      let counter = 0;
      let current = this.head;
      while (counter < index) {
        counter++;
        current = current.nextNode;
      }
      return current.value;
    },
    pop() {
      let current = this.head;
      let previous = null;
      while (current.nextNode != null) {
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = null;
    },
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value == value) {
          return true;
        }
        current = current.nextNode;
      }
      return false;
    },
    find(value) {
      let index = 0;
      let current = this.head;
      while (current) {
        index++;
        if (current.value == value) {
          return index;
        }
        current = current.nextNode;
      }
      return null;
    },
    toString(value) {
      let string = "";
      let current = this.head;
      while (current) {
        string += `(${current.value}) -> `;
        current = current.nextNode;
      }
      string += "null";
      return string;
    },
  };
};

export default LinkedList;
