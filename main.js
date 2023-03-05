const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
let todoApptext = [];
let index=0
function createHtmlElemenets(e) {
  e.preventDefault();

  todoApptext.push({
    text:input.value,
    id: index
  });
  index++
  let result = "";

  todoApptext.forEach((item, index) => {
    result = result + `<li class="item"> ${item.text}

    <img class="krug" src="./img/green_krug.svg" alt="icon">
    <img class=" icon" src="./img/delete.svg" onclick="removeTodoApp(${item.id})" alt="icon"> </li>`;
  });

  // const li = document.createElement("li");
  // li.setAttribute("class", "item");
  // let listContent = document.createElement("div");
  // todoApptext.forEach((item) => {

  //   const li = document.createElement("li");
  //   li.setAttribute("class", "item");
  //   const img = document.createElement("img");
  //   img.setAttribute("src", "./img/delete.svg");
  //   img.setAttribute("class", "icon");

  //   const imgSvg = document.createElement("img");
  //   imgSvg.setAttribute("src", "./img/green_krug.svg");
  //   imgSvg.setAttribute("class", "krug");


  //   const p = document.createElement("p");
  //   p.textContent = item;
  //   li.appendChild(p);
  //   li.appendChild(img);
  //   li.appendChild(imgSvg)
  //   console.log(li);
  //   // result += li;
  //   listContent.appendChild(li);
  // });
  // console.log(listContent)
  // list.replaceChildren(listContent);
  list.innerHTML = result;
}
form.addEventListener("submit", createHtmlElemenets);


function removeTodoApp(id){  
todoApptext = todoApptext.filter((item)=> item.id !== id);


let result = "";

todoApptext.forEach((item, index) => {
  result = result + `<li class="item"> ${item.text}

  <img class="krug" src="./img/green_krug.svg" alt="icon">
  <img class=" icon" src="./img/delete.svg" onclick="removeTodoApp(${item.id})" alt="icon"> </li>`;
});

list.innerHTML = result;
}
