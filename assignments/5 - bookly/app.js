let books =[];
let hidden = [];
let searchRes = [];
let banner = document.querySelector("#page-banner");
let add = document.querySelector("#add-book > input[type='text']");
let search = document.querySelector("#search-books >input[type ='text']");
let checkBox = document.querySelector("#add-book > input[type='checkbox']");
let ul = document.querySelector("ul");

search.classList.add("search-field");
add.classList.add("add-field");
checkBox.addEventListener("click", displayHidden);
add.addEventListener("keydown", addBooks);
function addBooks(event) {
    if(event.keyCode == 13){
        event.preventDefault();
        const obj = {
            name: add.value,
        }
        books.push(obj);
        createUI(books);
        add.value = "";
    }
}

function createUI(arr) {
    ul.innerHTML ="";
    arr.forEach((arr,index) => {
        let li = document.createElement("li");
        li.classList.add("book-list");
        let span = document.createElement("span");
        span.textContent = "Delete";
        span.classList.add("delete");
        span.addEventListener("click", remove);
        li.textContent = arr.name;
        li.id = index;
        li.append(span);
        ul.append(li);
    });
}

function remove(event) {
    let index = event.target.parentElement.id;
    books.splice(index,1)
    createUI(books);
}

function displayHidden(event) {
    if(checkBox.checked == true) {
        createUI(hidden);
    } else {
        createUI(books);
    }
}

search.addEventListener("keyup", displaySearch);
function displaySearch(event) {
   
        searchRes = books.filter(book => (book.name.includes(search.value)));
        createSearch(searchRes);
        
    
}

function createSearch(arr) {
    let ul1 = document.querySelector("ul");
    ul1.innerHTML = "";
    banner.append(ul1);
    searchRes.forEach(elem => {
        let li = document.createElement("li");
        li.textContent = elem.name;
        ul1.append(li);
    });
    
}
   