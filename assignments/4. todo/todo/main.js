let input = document.querySelector('input[type="text"]');
let ul = document.querySelector("ul");
let i = 0;
let task=[];
//let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clearCompleted = document.querySelector(".clear-completed");
let footer = document.querySelector(".footer");
let para = document.createElement("p");
let all = document.createElement("button");
let footerButton = document.createElement("div");

input.addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        const obj = {
            text : input.value,
            checked: false,
        } 
        i++;
        task.push(obj);
       createUI(task);
       input.value="";
    }
});
function createUI(arr) {
    ul.innerHTML='';
    arr.forEach(( arr,i) => {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let span = document.createElement("span");
        let checkBox = document.createElement("input");
        checkBox.addEventListener("click",  toggle);
        span.addEventListener("click", remove);
        checkBox.type = "checkbox";
        p.textContent = arr.text;
        span.textContent = "x";
        span.style.fontStyle = "italic";
        span.style.color = "salmon";
        li.id = i;
        checkBox.checked = arr.checked;
        li.append(checkBox,p,span);
        ul.append(li);
    });
    footer.style.display = "block";
    footerButton.classList.add("footer-btns");
    para.textContent =  `${task.length} items left`;
    footer.append(para, footerButton);
    footerButton.append(all);
    
    all.textContent = "All";
    all.classList.add("all");
    all.addEventListener("click", displayAll);
    // active.addEventListener("click", displayActive);
    // completed.addEventListener("click", displayCompleted);
    // clearCompleted.addEventListener("click", displayClear);
}
function countLeft() {
    let task1 = task.filter(task => (task.checked !== true));
    left = task1.length;
    createUI(task);
}
function remove(event) {
    let index=event.target.parentElement.id;
    task.splice(index,1);
    createUI(task);
}
function toggle(event) {
    let index = event.target.parentElement.id;
    task[index].checked = !(task[index].checked);
    countLeft();
    
}

function displayAll(event) {
    createUI(task);
}

function displayActive(event) {
   let task1 =  task.filter(task => task.checked!==true);
   createUI(task1);
}

function displayCompleted(event) {
    let task1 =  task.filter(task => task.checked==true);
    createUI(task1);
}

function displayClear(event) {
    task = task.filter(task => task.checked!==true);
    createUI(task);
}