export default class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.id = data.id
    }

    get Template() {
        return /*html*/`
        <li><input type="checkbox" onclick="app.todoController.checkTodo('${this.id}')" ${this.completed ? 'checked' : ''}> ${this.description} <i class="fas fa-times text-danger" onclick="app.todoController.deleteTodo('${this.id}')"></i></li>
        `
    }
}



// 