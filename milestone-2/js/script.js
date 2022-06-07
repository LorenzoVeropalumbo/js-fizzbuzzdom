const numberList = document.querySelector('.list');
let FizzBuzz;

// Write all numbers
for(let i = 1; i <= 100; i++) {

  // check if the number is a multiple of 3, 5 or both
  if(i % 3 == 0 && i % 5 == 0){

    // create inner class message
    const newLi = `<li class="box">FizzBuzz</li>`;
    numberList.innerHTML += newLi;
    

  } else if (i % 3 == 0) {

    // create inner class message
    const newLi = `<li class="box">Fizz</li>`;
    numberList.innerHTML += newLi;

  } else if (i % 5 == 0) {
    
    // create inner class message
    const newLi = `<li class="box">Buzz</li>`;
    numberList.innerHTML += newLi;

  } else {

    // create inner class message
    const newLi = `<li class="box">${i}</li>`;
    numberList.innerHTML += newLi;

  }
  
}