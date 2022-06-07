const numberList = document.querySelector('.list');

for(let i = 1; i <= 100; i++) {
  
  if(i % 3 == 0 && i % 5 == 0){

    const newLi = `<h2 class="mia-classe">FizzBuzz</h2>`;
    numberList.innerHTML += newLi;
    console.log("FizzBuzz");

  } else if (i % 3 == 0) {

    const newLi = `<h2 class="mia-classe">Fizz</h2>`;
    numberList.innerHTML += newLi;
    console.log("Fizz");

  } else if (i % 5 == 0) {
    
    const newLi = `<h2 class="mia-classe">Buzz</h2>`;
    numberList.innerHTML += newLi;
    console.log("Buzz");

  } else {

    const newLi = `<h2 class="mia-classe">${i}</h2>`;
    numberList.innerHTML += newLi;
    console.log(i);
  }
  
}