"use strict";

/*
  ունեք 2 զանգված, առաջին զանգվածը իր մեջ պետք է պահի անուններ, 2րդ զանգվածը պետք է պահի 
  ազգանուններ, ու էնպես պետք ա անեք, որ ռանդոմ անուն ազգանուններ գեներացվեն HTMLի վրա, 
  գեներացվելուց հետո պետք ա լոգիկա մշակեք որը անունով կհասկանա էդ մարդը կին ա թե տղամարդ,
  ու կանանց առանձնացնում եք մեկ այլ բլոկի (div) տղերքին մեկ այլ
*/

const names = ["Elizabeth", "Jesica", "Alex", "Lucy", "Michael", "John", "Olivia", "Leo", "Ell", "Frank"];
const surnames = ["Anderson", "Brown", "Jackson", "Adams", "Woods", "Smith", "Williams", "Davis", "Thomas", "Miller"];

const woman = ["Elizabeth", "Jesica", "Lucy", "Olivia", "Ell"];
const men = ["Alex", "Michael", "John", "Leo", "Frank"];

const btn = document.querySelector(".btn");
const people = document.querySelector(".people");

const wmn = document.querySelector(".woman");
const mn = document.querySelector(".man");


btn.addEventListener("click", function(){
  const name = names[Math.floor(Math.random() * names.length)];
  const lastName = surnames[Math.floor(Math.random() * surnames.length)];

  const fullName = name + " " + lastName;

  for(let i = 0; i < woman.length; i++){
    if(woman[i] === name){
      wmn.textContent += `${fullName}, `;
    }
  }
  
  for (let i = 0; i < men.length; i++) {
    if (men[i] === name) {
      mn.textContent += `${fullName}, `;
    }
  }
});