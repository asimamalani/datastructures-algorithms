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
  for(j=0; j<a2.length; j++) {
    const item = a2[j];
    if (map[item]) {
      return true;
    }
  }
  return false;
  // if yes, return true, else false
}
const result = containsCommonItem(array1, array2);
console.log(result);

//////////////////////////


//////////////////////////

//////////////////////////

//////////////////////////