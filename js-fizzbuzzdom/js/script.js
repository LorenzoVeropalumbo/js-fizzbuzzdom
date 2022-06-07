const numberList = document.querySelector('.list');

// Write all numbers
for(let i = 1; i <= 100; i++) {
  
  // create inner class message
  const newLi = `<h2>${i}</h2>`;
  numberList.innerHTML += newLi;
  // log on the console
  console.log(i);
}