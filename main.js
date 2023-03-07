// const arr =["Yanvar","Fevral","Mart"]
// console.log(new Date().getFullYear())
// console.log(new Date().getDay())
// console.log(arr[new Date().getMonth(2)])
// console.log(`${new Date("2030-01-31T19:00:00").getFullYear()}.${new Date("2030-01-31T19:00:00").getMonth()}.${new Date("2030-01-31T19:00:00").getDay()}.${new Date("2030-01-31T19:00:00").getHours()}`)




// let d=new Date("2030-01-31T19:00:00")

// let datestring =
//   d.getDate() +
//   "." +
//   (d.getMonth() + 1) +
//   "." +
//   d.getFullYear() +
//   " " +
//   d.getHours() +
//   ":" +
//   d.getMinutes();
//   console.log(datestring);

// console.log("000012345".padEnd(15,"#"));

// const person={
//   name:"shavkat",
//   age:20,
//   gender:"Male"
// };


// for(let key in person){
//   console.log(person[key]);
// }


// console.log(Object.keys(person))
// Object.keys(person).forEach((item)=>{
//   console.log(person[item]);
// })
// console.log( Object.values(person));


const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const modallayer=document.querySelector(".modallayer")
const editedInput=document.querySelector("#editedInput")
const editdForm=document.querySelector("#editdForm")
let todoApptext = [
 {
  text: "Salom",
  id:999999,
 }
];
let index=0;
let editItem

renderHtmlElements()
function createHtmlElemenets(e) {
  e.preventDefault();
 todoApptext.push({
    text:input.value,
    id:index
 })
 index++
 renderHtmlElements()

 
    // const li =document.createElement("li")
    // li.setAttribute("class","item");
    // let listContent=document.createElement("div")
    // todoApptext.forEach((item)=>{
    //     const li =document.createElement("li")
    //     li.setAttribute("class","item");
    //     const p=document.createElement("p")
    //     p.textContent=item;
    //     li.appendChild(p)
    //     listContent.appendChild(li)

    // })
    // list.replaceChildren(listContent)
}
form.addEventListener("submit", createHtmlElemenets);

function removeTodoApp(id){
    todoApptext=todoApptext.filter((item)=> item.id !==id)
    renderHtmlElements()
}


function showModal(id){
  modallayer.style.display = 'flex'

 let findEndObject=todoApptext.find((item)=>{
  return item.id===id
 });
 let findEndObjectIndex=todoApptext.findIndex((item)=>{
  return item.id===id
 });
 editedInput.value=findEndObject.text;
 editItem={
  index:findEndObjectIndex,
  id:id
 }
}
function editdFormHandler(e){
  e.preventDefault()



console.log(editItem);
todoApptext.splice(editItem.index,1,{
  text:editedInput.value,
  id:editItem.id,

})
console.log(todoApptext);
modallayer.style.display = 'none'
renderHtmlElements()


}
function renderHtmlElements(){
  let result = "";

    todoApptext.forEach((item, index) => {
      result = result + `<li class="item"> ${item.text}
      <img class="krug" onclick="showModal(${item.id})"   src="./img/green_krug.svg" alt="icon">
      <img class=" icon" src="./img/delete.svg" onclick="removeTodoApp(${item.id})" alt="icon"> </li>`;
    });

    list.innerHTML = result;
}
modallayer.addEventListener("click",(e)=>{
  if(e.target===modallayer){
  modallayer.style.display = 'none'

  }
})
editdForm.addEventListener("submit",editdFormHandler)