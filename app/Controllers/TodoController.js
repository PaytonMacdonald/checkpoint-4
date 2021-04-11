import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";



//Private
function _draw() {
    let todos = ProxyState.todos;
    let template = ''
    todos.forEach(t => template += t.Template)
    document.getElementById("todo-list").innerHTML = template

}
function _taskDraw() {
    document.getElementById("task-count").innerHTML = `<span> ${ProxyState.taskCount} | ${ProxyState.taskTotal} </span>`

}


//Public
export default class TodoController {
    constructor() {
        ProxyState.on("todos", _draw);
        ProxyState.on('taskTotal', _taskDraw)
        ProxyState.on('taskCount', _taskDraw)
        this.getTodo()
    }

    async addTodo() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let todo = {
                // @ts-ignore
                description: form.description.value
            }
            await todoService.addTodo(todo)
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    async getTodo() {
        try {
            await todoService.getTodo()
        } catch {
            console.error(error)
        }
    }

    async checkTodo(id) {
        try {
            await todoService.checkTodo(id)
        } catch {
            console.error(error)
        }
    }

    async deleteTodo(id) {
        try {
            await todoService.deleteTodo(id)
        } catch {
            console.error(error)
        }
    }

}