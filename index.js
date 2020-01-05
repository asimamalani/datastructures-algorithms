//#1 -- For loop in Javascript.
const nemo = ['nemo'];

function findNemo1(array) { //O(n)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo1(nemo);