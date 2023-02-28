// function kitten(str, ind) {
//   let s = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i !== ind) {
//       s=s+str[i];
//     }
//     // console.log(str[i]);
//   }
//   return s;
// }
// console.log(kitten("webp", 2));



// const form = document.getElementsByClassName("formbtn");
// const input = document.getElementById("input");
// const list = document.getElementById("list");
// const todoApptext = [];
// function createHtmlElemenets(e) {

//   e.preventDefault();

//   todoApptext.push(input.value);

//   console.log(todoApptext);

//   let resulut = "";

//   todoApptext.forEach((item, index) => {
//     resulut = resulut + `<li>${index + 1} ${item}</li>`;
//   });
//   list.innerHTML = resulut;
// }
// form.addEventListener("submit",createHtmlElemenets);










const form = document.getElementById("form")
const input = document.getElementById("input");
const list =document.getElementById("list")
const todoApptext = [];
function createHtmlElemenets(e) {

  e.preventDefault();

  todoApptext.push(input.value);

//   console.log(todoApptext);

  let resulut = "";

  todoApptext.forEach((item, index) => {
    resulut = resulut + `<li class="item"> ${item} 

    <img class="krug" src="./img/green_krug.svg" alt="icon">
    <img class=" icon" src="./img/delete.svg" alt="icon"> </li>`;
  });
  list.innerHTML = resulut;
}
form.addEventListener("submit", createHtmlElemenets);