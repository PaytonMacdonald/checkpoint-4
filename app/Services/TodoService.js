import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "./AxiosService.js"

class TodoService {
    async addTodo(todo) {
        let res = await api.post('payton/todos', todo)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
        ProxyState.taskTotal++
    }
    async getTodo() {
        let res = await api.get('payton/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
        for (let i = 0; i < ProxyState.todos.length; i++) {
            ProxyState.taskTotal++
            if (ProxyState.todos[i].completed == true) {
                ProxyState.taskCount++
            }
        }
        console.log('getTodo task count is ' + ProxyState.taskCount)
        console.log('taskToal is ' + ProxyState.taskTotal)
    }

    async checkTodo(id) {
        let todo = ProxyState.todos.find(i => i.id == id)

        if (todo.completed != true) {
            todo.completed = true
            ProxyState.taskCount++
        }
        else {
            todo.completed = false
            ProxyState.taskCount--
        }
        if (ProxyState.taskCount < 0) { ProxyState.taskCount = 0 }

        console.log('addTodo task count is ' + ProxyState.taskCount)

        await api.put('payton/todos/' + id, todo)
    }


    async deleteTodo(id) {
        if (window.confirm("Do you really want to delete this?")) {
            let todo = ProxyState.todos.find(i => i.id == id)
            if (todo.completed == true) {
                ProxyState.taskCount--
            }
            ProxyState.todos = ProxyState.todos.filter(i => i.id != id)
            await api.delete('payton/todos/' + id, todo)
            ProxyState.taskTotal--

        }
    }

}

export const todoService = new TodoService();
