const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "The final empire",
            author: "Brandon Sanderson",
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: { // events
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        mouseEnterEvent(event, data) {
            console.log(event, event.type)
            if (data) {
                console.log("data: ", data)
            }
            console.log("mouse Entered")
        },
        mouseLeaveEvent(event) {
            console.log("mouse left");
        },
        doubleClickEvent(event) {
            console.log("double clicked!")
        },
        handleMouseMove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})

app.mount("#app")
