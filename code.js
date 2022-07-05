
const app = Vue.createApp({
    data(){
        return{
            url: 'http://www.thenetninja.co.uk',
            Books:[
                {title:'Name of The Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg'},
                {title:'The Way of the Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg'},
                {title:'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg'}

            ],
            showBooks: true,
        }
    },
    methods:{
        toggleBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})
  

app.mount('#app')