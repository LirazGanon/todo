import { router } from '../router.js'
import { store } from './store/store.js'


const options = {
    template:/*html*/ `
        <section>
          <h1>TODO OH YEAH!</h1>
          <router-link to="/todo">HOME</router-link > 
                    <router-view/>
        </section>
    `,

    created() {
        console.log('Welcome to state management...')
    },
    components: {
 
    },

}
const app = Vue.createApp(options)

app.use(router)
app.use(store)
app.mount('#app')