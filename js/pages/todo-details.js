import {showSuccessMsg} from '../services/event-bus.service.js'

export default {
	name:'todo-details',
	props:['todo'],
    template:/*html*/ `
	<li class="todo-list-details flex col">
	  <div> {{todoToShow.name}}</div>
	  <div>{{todoToShow.desc}}</div>
	  <div>{{todoToShow.importance}}</div>
	  <div>
	    <input type="checkbox" @input="setDone(todoToShow._id)" v-model="todoToShow.isDone" />
	  </div>
	  <div>
	    <button  @click="toggleMaximize">close</button>
	  </div>
	  <div>
	    <button @click="copyLink">send link to Doda</button>
	  </div>
	</li>
	`,
	data(){
		return{
			todos:this.$store.state.todos,
		}
	},
    methods: {
		toggleMaximize(){
			this.$emit('toggleMaximize')
		},
		copyLink(){
			const Url = `${window.location.href}/${this.todoToShow._id}`
			navigator.clipboard.writeText(Url);
			showSuccessMsg('Link copied for DODA ')
		},
		setDone(todoId) {
			this.$store.commit({ type: 'toggleDone',todoId })
        },
    },
    computed: {
		todoToShow(){
			if (this.todo) return this.todo
			const id = this.$route.params.id
			return this.todos.find(todo => todo._id === id)
		}
        
    },

}


