"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoList = [];
function addTodoItem(todo) {
    todoList.push(todo);
}
function markTodoAsCompleted(id) {
    todoList.forEach(function (todo) {
        if (todo.id === id) {
            todo.completed = true;
        }
    });
}
var newTodo = {
    id: 1,
    title: "Learn TypeScript",
    completed: false,
    dueDate: new Date("2024-12-31"),
};
addTodoItem(newTodo);
markTodoAsCompleted(1);
console.log(todoList);
