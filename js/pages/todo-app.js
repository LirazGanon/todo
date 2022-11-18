import todoAdd from '../cmps/todo-add.cmp.js'
import todoPreview from '../cmps/todo-preview.cmp.js'
import userMsg from '../cmps/user-msg.js'


export default {
  name:'todo-app',
  template:/*html*/ `
	<section>
  <user-msg />
	  <ul class="todo-list-container">
	    <li class="todo-list-item">
	      <div>Title</div>
	      <div>Importance</div>
	      <div>Created At</div>
	      <div>Done?</div>
	      <div>Delete</div>
	    </li>
	    <todo-preview
	      v-for="todo in todos"
	      :todo="todo"
	      @setDone="setDone"
	      @deleteTodo="deleteTodo"/>
	  </ul>
	  <todo-add />
	</section>
	`,
  methods: {
    setDone(todoId){
      this.$store.commit({ type: 'toggleDone',todoId })
    },
    deleteTodo(todoId) {
      this.$store.commit({ type: 'deleteTodo',todoId })
  }
  },
  computed: {
      todos(){
          return this.$store.state.todos
      },

    },
  components:{
    todoAdd,
    todoPreview,
    userMsg

  }

}
