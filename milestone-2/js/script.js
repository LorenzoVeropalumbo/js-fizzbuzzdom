const numberList = document.querySelector('.list');
let FizzBuzz;
for(let i = 1; i <= 100; i++) {
  
  if(i % 3 == 0 && i % 5 == 0){

    const newLi = `<li>FizzBuzz</li>`;
    numberList.innerHTML += newLi;
    

  } else if (i % 3 == 0) {

    const newLi = `<li>Fizz</li>`;
    numberList.innerHTML += newLi;

  } else if (i % 5 == 0) {
    
    const newLi = `<li>Buzz</li>`;
    numberList.innerHTML += newLi;

  } else {

    const newLi = `<li>${i}</li>`;
    numberList.innerHTML += newLi;

  }
  
}