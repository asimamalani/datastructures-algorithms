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
const boxes = [1,2,3,4,5];
function logPairsOfArray(array) { //O(n ^ 2)
  for (let i=0; i < array.length; i++) {
    for (let j=0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
//logPairsOfArray(boxes);

//////////////////////////


//////////////////////////


//////////////////////////

//////////////////////////

//////////////////////////