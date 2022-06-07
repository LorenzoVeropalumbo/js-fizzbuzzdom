const numberList = document.querySelector('.list');

// Write all numbers
for(let i = 1; i <= 100; i++) {
  // PER NON CONFODERMI HO PREFERITO PRINTARLI ANCHE A SCHERMO
  // create inner class message
  const newLi = `<h2>${i}</h2>`;
  numberList.innerHTML += newLi;
  // log on the console
  console.log(i);
}