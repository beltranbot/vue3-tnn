const app = Vue.createApp({
    data() {
        return {
            title: "The final empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },
    methods: { // events
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount("#app")
