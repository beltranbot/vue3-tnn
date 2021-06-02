const app = Vue.createApp({
    data() {
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                {
                    title: "name of the wind",
                    author: "patrick rothfuss",
                    img: "assets/1.jpeg",
                    isFav: true,
                },
                {
                    title: "the way of kings",
                    author: "brandon sanderson",
                    img: "assets/2.jpeg",
                    isFav: false,
                },
                {
                    title: "the final empire",
                    author: "Brandon Sanderson",
                    img: "assets/3.jpeg",
                    isFav: true,
                }
            ]
        }
    },
    methods: { // events
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(index) {
            // here we can also pass the book directly
            this.books[index].isFav = !this.books[index].isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
})

app.mount("#app")
