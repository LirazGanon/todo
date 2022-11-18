import todoDetails from '../pages/todo-details.js'

export default {
    name: 'todo-preview',
    props: ['todo'],
    template:/*html*/ `
	<li class="todo-list-item" :class="{'hideLine':maximize}">
	  <div :class="{'line-mark':todo.isDone}" class="pointer" @click="toggleMaximize">{{todo.name}}</div>
	  <div >{{todo.importance}}</div>
	  <div>{{formattedTime}}</div>
	  <div>
	    <input type="checkbox" @input="setDone(todo._id)" v-model="todo.isDone" />
	  </div>
	  <div>
	    <button @click="deleteTodo(todo._id)">X</button>
	  </div>
      </li>
      <todo-details :todo="todo" class="maximize" :class="{'hideLine':!maximize}" 
      @toggleMaximize="toggleMaximize"
      @setDone="setDone" />
	`,
    data(){
        return {
            maximize: false,
        }
    },
    methods: {
        setDone(todoId) {
            this.$emit('setDone', todoId)
        },
        deleteTodo(todoId) {
            this.$emit('deleteTodo',todoId)
        },
        toggleMaximize(){
            this.maximize = !this.maximize
        },
    },

    computed: {
        formattedTime() {
            const timeStamp = this.todo.time
            var today = new Date()
            var sent = new Date(timeStamp)
            let options = { day: "numeric", month: "short" }
            if (today.setHours(0, 0, 0, 0) === sent.setHours(0, 0, 0, 0)) {
                const date = new Date(timeStamp);
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
            }
            else {
                return new Date(timeStamp).toLocaleDateString("en-US", options);
            }
        },
    },
    components:{
        todoDetails
    }
}
