//////////////////////////
const nemo = ['nemo'];

function findNemo1(array) { //O(n)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}
//findNemo1(nemo);

//////////////////////////
const boxes = [1, 2, 3, 4, 5];
function logPairsOfArray(array) { //O(n ^ 2)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
//logPairsOfArray(boxes);

//////////////////////////
const array1 = ['a', 'b', 'c', 'd', 'z'];
const array2 = ['o', 'p', 'd', 'r', 'x'];

function containsCommonItem(a1, a2) {
  //validate the inputs, check for null, undefined, empty, check if they are arrays and if the items are of same type

  //loop through the first array and store values in a HashTable
  const map = {};
  a1.forEach(item => {
    if (!map[item]) {
      map[item] = true
    }
  });
  //console.log(map);
  //loop through second array and check if the item exists in the HashTable.
  for (j = 0; j < a2.length; j++) {
    const item = a2[j];
    if (map[item]) {
      return true;
    }
  }
  return false;
  // if yes, return true, else false
}
//containsCommonItem(array1, array2);

//////////////////////////

//[-3, 1,4,6,8,9] => 7 answer: true
// [1,3,9,20] => 24 answer: false
const a1 = [-3, 1, 4, 6, 8, 9];
const a2 = [1, 3, 9, 20];
const sum1 = 7;
const sum2 = 24;

function hasPairWithSum1(a1, s) {
  for (let i = 0; i < a1.length; i++) {
    for (let j = i + 1; j < a1.length; j++) {
      if ((a1[i] + a1[j]) === s) {
        return true;
      }
    }
  }
  return false;
}
//console.log(hasPairWithSum1(a1, sum1), hasPairWithSum1(a2, sum2));

//////////////////////////
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    const comp = sum - arr[i];
    mySet.add(comp)
  }
  return false;
}
//console.log(hasPairWithSum2(a1, sum1), hasPairWithSum2(a2, sum2));

//////////////////////////

//implement Array data structure

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  peek(index) {
    return get(index);
  }

  //[2, 5, 7, 10] insert(1, 55)

  insert(index, item) {
    //check the input for underflow/overflow
    if (index < 0) {
      index = 0;
    }

    //check if the index to insert is equal or more than the array length, if so push at the end
    if (index >= this.length - 1) {
      this.push(item);
      return this;
    }

    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = item;
    this.length++;
    return this;
  }

  //[2,5,7,10] delete 5 (from index 1)
  delete(index) {
    //check the input for underflow/overflow
    if (index < 0) {
      index = 0;
    }

    //check if the index to delete is equal or more than the array length, if so pop from the end
    if (index >= this.length - 1) {
      return this.pop();
    }

    const deletedItem = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }
}

// const customArr = new MyArray();
// customArr.push(2);
// customArr.push(5);
// customArr.push(7);
// customArr.push(10);
// console.log(customArr);
// customArr.insert(1, 55);
// console.log(customArr);
// customArr.insert(10, 25);
// console.log(customArr);
// customArr.delete(1);
// console.log(customArr);
// customArr.delete(-101);
// console.log(customArr);
// customArr.delete(101);
// console.log(customArr);
//////////////////////////

//LinkedList using HashMap

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  print() {
    const list = [];
    let currentNode = this.head;
    while(currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.print();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.print();
  }

  insert(index, value) {
    if(index <= 0) {
      return this.prepend(value);
    }
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    this.length++;
    return this.print();
  }

  traverseIndex(index) {
    if(index <= 0) {
      return this.head;
    }
    if(index >= this.length - 1) {
      return this.tail;
    }
    let currentNode = this.head;
    let counter = 0;
    while(counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if(index <= 0) {
      this.head = this.head.next;
      this.length--;
      return this.print();
    }
    const leader = this.traverseIndex(index-1);
    let unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    unwantedNode = null;
    this.length--;
    return this.print();
  }

  reverse() {
    //[ 89, 20, 10, 3, 6 ]
    //[ 6, 3, 10, 20, 89 ]
    let first = this.head;
    this.tail = first;
    let second = first.next;
    while(second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.print();
  }
}
// const singleLL = new LinkedList(20);
// singleLL.print();
// singleLL.append(2);
// singleLL.append(3);
// singleLL.append(6);
// singleLL.prepend(89);
// singleLL.insert(3, 10);
// singleLL.remove(2);
// singleLL.reverse();

//////////////////////////

// First recurring number in an array
// Optimized solution using a Map or a Set

function firstRecurringItemInAnArray(nums) {
  if(!nums || nums.length < 2) {
    throw "not enough items in an input array";
  }

  const mapSet = new Set();
  for(let i=0; i< nums.length; i++) {
    if(mapSet.has(nums[i])) {
      return nums[i];
    }
    mapSet.add(nums[i]);
  }
  throw "no recurring items in an input array";
}

//firstRecurringItemInAnArray([]);

//DoublyLinkedList using HashMap

class DNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new DNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  print() {
    const list = [];
    let currentNode = this.head;
    while(currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  append(value) {
    const newNode = new DNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.print();
  }

  prepend(value) {
    const newNode = new DNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.print();
  }

  insert(index, value) {
    if(index <= 0) {
      return this.prepend(value);
    }
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = new DNode(value);
    const leader = this.traverseIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.print();
  }

  traverseIndex(index) {
    if(index <= 0) {
      return this.head;
    }
    if(index >= this.length - 1) {
      return this.tail;
    }
    let currentNode = this.head;
    let counter = 0;
    while(counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if(index <= 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this.print();
    }
    const leader = this.traverseIndex(index-1);
    let unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    follower.prev = leader;
    unwantedNode = null;
    this.length--;
    return this.print();
  }
}
// const doublyLL = new DoublyLinkedList(20);
// doublyLL.print();
// doublyLL.append(2);
// doublyLL.append(3);
// doublyLL.append(6);
// doublyLL.prepend(89);
// doublyLL.insert(3, 10);
// doublyLL.remove(2);
// doublyLL;

////////////////////////////////

// Implement Stack using an array
class StackArr {
  constructor() {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  peek() {
    return this.array[this.array.length-1];
  }
  pop() {
    return this.array.pop();
  }
}

// const myStackArr = new StackArr();
// myStackArr.push('google');
// myStackArr.push('microsoft');
// myStackArr.push('linkedin');
// myStackArr.peek();
// myStackArr.pop();
// myStackArr.peek();
// myStackArr.pop();
// myStackArr.pop();
// myStackArr.pop();
// myStackArr.peek();


// Implement Stack using LinkedList

class StackLL {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  peek() {
    return this.top;
  }
  pop() {
    if(this.length === 0) {
      return null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    if(this.length === 0) {
      this.bottom = null;
    }
    return holdingPointer;
  }
}

// const myStackLL = new StackLL();
// myStackLL.push('google');
// myStackLL.push('microsoft');
// myStackLL.push('linkedin');
// myStackLL.peek();
// myStackLL.pop();
// myStackLL.peek();
// myStackLL.pop();
// myStackLL.pop();
// myStackLL.pop();
// myStackLL.peek();