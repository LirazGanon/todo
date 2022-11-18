import { todoService } from '../services/todo.service.js'
import { utilService } from '../services/util.service.js'


const { createStore } = Vuex

const storeOptions = {
    strict: true,
    state() {
        return {
            todos: todoService.query(),
        }
    },
    mutations: {
        addTodo({ todos }, { todo }) {
            const newTodo = todoService.save(todo)
            todos.push(newTodo)
        },
        toggleDone({ todos }, { todoId }) {
            const todo = todos.find(todo => todo._id === todoId)
            todo.isDone = !todo.isDone
            todoService.save(todo)
        },
        deleteTodo({ todos }, { todoId }) {
            const todoIdx = todos.findIndex(todo => todo._id === todoId)
            todoService.remove(todoId)
            todos.splice(todoIdx, 1)
        },
        getTodo({ todos }, { id }) {
            const todo = todos.find(todo => todo._id === id)
            return todo
        },
    },
    getters: {
        getEmptyTodo() {
            return todoService.getEmptyTodo()
        }

    }
}

export const store = createStore(storeOptions)
