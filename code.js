
const app = Vue.createApp({
    data(){
        return{
            Books:[
                {title:'Name of The Wind', author: 'Patrick Rothfuss'},
                {title:'The Way of the Kings', author: 'Brandon Sanderson'},
                {title:'The Final Empire', author: 'Brandon Sanderson'}

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