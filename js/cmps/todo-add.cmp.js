
export default {
    template:/*html*/ `
	<section>
	  <form @submit.prevent="addTodo">
	    <input type="text" placeholder="What todo?" v-model="todo.name" />
	    <input
        v-model.number="todo.importance"
	      type="number"
	      min="1"
	      max="3"
	      placeholder="importance (1-3)"/>
	    <button>Add</button>
	  </form>
	</section>
	`,
    data(){
        return{
            todo : this.$store.getters.getEmptyTodo
        }
    },
    methods: {
        addTodo() {
            this.$store.commit({ type: 'addTodo', todo: this.todo })
            this.todo  = this.$store.getters.getEmptyTodo
        }
    },

    computed: {

        
    },

}


