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
  for(let i=0; i<arr.length; i++) {
    if(mySet.has(arr[i])) {
      return true;
    }
    const comp = sum-arr[i];
    mySet.add(comp)
  }
  return false;
}
console.log(hasPairWithSum2(a1, sum1), hasPairWithSum2(a2, sum2));

//////////////////////////

//////////////////////////