const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo)
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos)
}

function clearAllTodos(e) {

    if (confirm("tümünü silmek istediğinize emin misiniz ?")) {
        // Arayüzden todoları temizleme

        // todoList.innerHTML = ""; // Yavaş

        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");
    }

}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            //bulamadı
            listItem.setAttribute("style", "display : none !important");
        }

        else {
            listItem.setAttribute("style", "display :block");
        }
    });
}

function deleteTodo(e) {

    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success", "Todo başarıyla silindi")
    }
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        if (todo === deleteTodo) {
            todos.splice(index, 1); // Arrayden değeri silebiliriz.
        }
    });

    localStorage.setItem("todos", JSON.stringify(todsos));
}

let todos;
function loadAllTodosToUI() {
    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(function (todo) {
            addTodoToUI(todo);
        })
    }
    else {
        todos = [];
    }
}

function addTodo(e) {

    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo girin...");
    }

    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo başarıyala eklendi...")
    }


    e.preventDefault();
}

// function getTodosFromStorage() { //Storagedan Todoları Alma
//     let todos;

//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }

//     else {
//         todos = json.parse(localStorage.getItem("todos"));
//     }

//     return todos;
// }

function addTodoToStorage(newTodo) {
    // let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


// document.querySelector("button.btn.btn-danger").addEventListener("click", function(){

//     console.log(document.createElement("li"))
// })

function showAlert(type, message) {
    const alert = document.createElement("div");


    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    console.log(alert)

    firstCardBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 1000)


}

function addTodoToUI(newTodo) {  // String değerini list item olarak UI'ya
    //List Item oluşturma 
    const listItem = document.createElement("li");


    //link oluşturma
    const link = document.createElement(`a`);
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between"

    //Text Node Ekleme

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link)


    todoList.appendChild(listItem)
    todoInput.value = "";

}