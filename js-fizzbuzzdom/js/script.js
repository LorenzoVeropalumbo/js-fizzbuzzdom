const numberList = document.querySelector('.list');

for(let i = 1; i <= 100; i++) {
  
  const newLi = `<h2 class="mia-classe">${i}</h2>`;
  numberList.innerHTML += newLi;
  console.log(i);
}