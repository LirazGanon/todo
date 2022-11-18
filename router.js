
const { createRouter, createWebHashHistory } = VueRouter

// import homePage from './pages/home-page.js'
import todoApp from './js/pages/todo-app.js'
import todoDetails from './js/pages/todo-details.js'
import todoEdit from './js/pages/todo-edit.js'


const routes = [
    {
        path: '/',
        component: todoApp
    },
    {
        path: '/todo',
        component: todoApp
    },
    {
        path: '/todo/:id',
        component: todoDetails
    },
    {
        path: '/todo/edit/:id',
        component: todoEdit
    },

]


export const router = createRouter({
    routes,
    history: createWebHashHistory()
})