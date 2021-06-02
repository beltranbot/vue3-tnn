const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "The final empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },
    methods: { // events
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})

app.mount("#app")
