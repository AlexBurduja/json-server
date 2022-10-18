//cod Alex

const url = "http://localhost:3000"
const endpoint = "/todos"

fetch(url + endpoint)
 .then((response) => response.json())
 .then((todos) => listTodos(todos))

 function listTodos(todos) {
     const template = document.querySelector("#todo-card");
     const output = document.querySelector("[data-todoList]")
    
    for (const todo of todos){
    const clonedTemplate = template.content.cloneNode(true);
         
    const h3 = clonedTemplate.querySelector("[data-todoTitle]")
    h3.textContent = todo.title
    
    const description = clonedTemplate.querySelector("[data-todoDescription]")
    description.textContent = todo.description
    
    const deadline = clonedTemplate.querySelector("[data-todoDeadline]")
    deadline.textContent = todo.deadline

    output.appendChild(clonedTemplate);
    }
}
