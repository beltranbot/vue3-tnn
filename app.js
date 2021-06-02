const app = Vue.createApp({
    data() {
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                {
                    title: "name of the wind",
                    author: "patrick rothfuss",
                    img: "assets/1.jpeg"
                },
                {
                    title: "the way of kings",
                    author: "brandon sanderson",
                    img: "assets/2.jpeg"
                },
                {
                    title: "the final empire",
                    author: "Brandon Sanderson",
                    img: "assets/3.jpeg"
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
