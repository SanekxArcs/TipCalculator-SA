'use strict';

const personInput = document.querySelector('.people'),
      personsWindow = document.querySelector('.container-for-persons'),
      resultText = document.querySelector('.js-list-of-person-results'),
      nameInputsText = document.querySelectorAll('.person-name'),
      billInputsValue = document.querySelectorAll('.person-bill'),
      IdNumber = document.querySelectorAll('.number-text');



personInput.addEventListener('input', createInputs);

function createInputs(){
  let clearDivs = document.querySelectorAll('.container-for-persons');
  let clearResurtDivs = document.querySelectorAll('.list-of-person-results');
  clearDivs.forEach((e) => {
    e.innerHTML = "";
  });
  clearResurtDivs.forEach((e) => {
    e.innerHTML = "";
  })
  let valuePersons = personInput.value;
  console.log(valuePersons);
  for (let index = 1; index <= valuePersons; index++) {
    console.log(index);
    personsWindow.innerHTML += `<div class="list-of-person">
    
    <div class="personal-number">
      <p class="number number-text" id="${index}">${index}</p>
    </div>
    
    <div class="names">
      <input type="text" class="person-name input">
    </div>
    
    <div class="personal-bill">
      <input type="number" class="person-bill input">
    </div>
  </div>`;
  resultText.innerHTML += `<div class="list-of-person-results">

  <div class=" check-boxes check-boxes-result">
    <input id="${index}" type="checkbox" class="material_checkbox">
  </div>
  
  <div class="personal-number-result">
    <p class="number-result" id="${index}">${index}</p>
  </div>
  
  <div class="names-result">
    <p class="person-name-result">oleksandr</p>
  </div>
  
  <div class="personal-bill-result">
    <p class="person-bill-result">49.00</p>
  </div>
</div>`
  }
  return
};

personsWindow.addEventListener('iuput', forEach() {
  recordData;
});

let dataBill = [0];

function recordData(e) {
  dataBill += {
    id: IdNumber,
    name: nameInputsText,
    bill: billInputsValue
  }
};

console.log(dataBill);