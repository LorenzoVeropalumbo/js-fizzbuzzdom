const numberList = document.querySelector('.list');

// Write all numbers
for(let i = 1; i <= 100; i++) {
  
  // check if the number is a multiple of 3, 5 or both
  if(i % 3 == 0 && i % 5 == 0){

    // create inner class message
    const newLi = `<h2>FizzBuzz</h2>`;
    numberList.innerHTML += newLi;
    console.log("FizzBuzz");

  } else if (i % 3 == 0) {

    // create inner class message
    const newLi = `<h2>Fizz</h2>`;
    numberList.innerHTML += newLi;
    console.log("Fizz");

  } else if (i % 5 == 0) {
    
    // create inner class message
    const newLi = `<h2>Buzz</h2>`;
    numberList.innerHTML += newLi;
    console.log("Buzz");

  } else {

    // create inner class message
    const newLi = `<h2>${i}</h2>`;
    numberList.innerHTML += newLi;
    console.log(i);
  }
  
}