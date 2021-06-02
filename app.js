const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {
                    title: "name of the wind",
                    author: "patrick rothfuss",
                },
                {
                    title: "the way of kings",
                    author: "brandon sanderson",
                },
                {
                    title: "the final empire",
                    author: "Brandon Sanderson"
                }
            ]
        }
    },
    methods: { // events
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})

app.mount("#app")
