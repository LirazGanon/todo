import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'

const KEY = 'todoDB'

export const todoService = {
    query,
    getById,
    remove,
    save,
    getEmptyTodo
}

var gTodos = _createTodos()

// TODO: support paging and filtering and sorting
function query() {
    const todos = JSON.parse(JSON.stringify(gTodos))
    return todos
}

function getById(id) {
    return gTodos.find(todo => todo._id === id)
}

function remove(id) {
    const idx = gTodos.findIndex(todo => todo._id === id)
    gTodos.splice(idx, 1)
    storageService.store(KEY, gTodos)
}

function save(todo) {
    const todoToSave = JSON.parse(JSON.stringify(todo))
    const savedTodo = (todoToSave._id) ? _update(todoToSave) : _add(todoToSave)

    storageService.store(KEY, gTodos)
    return savedTodo
}


function _add(todo) {
    todo._id = utilService.makeId()
    todo.time - Date.now()
    gTodos.push(todo)
    return todo
}

function _update(todo) {
    const idx = gTodos.findIndex(currTodo => currTodo._id === todo._id)
    gTodos.splice(idx, 1, todo)
    return todo
}

function getEmptyTodo() {
    return {
        name: '',
        desc:'Enter your description',
        importance: '',
        isDone: false,
        time: Date.now()

    }
}

function _createTodos() {
    var todos = storageService.load(KEY)
    if (!todos || !todos.length) {
        todos = [_createTodo('Clean The House'), _createTodo('Make a Pizza')]
        storageService.store(KEY, todos)
    }
    return todos
}

function _createTodo(name) {
    return {
        _id: utilService.makeId(),
        name,
        desc:'Enter your description',
        importance:1,
        isDone: false,
        time: Date.now()
    }
}
