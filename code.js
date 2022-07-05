
const app = Vue.createApp({
    data(){
        return{
            url: 'http://www.thenetninja.co.uk',
            Books:[
                {title:'Name of The Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true},
                {title:'The Way of the Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                {title:'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true}

            ],
            showBooks: true,
        }
    },
    methods:{
        toggleBooks(){
            this.showBooks = !this.showBooks
        }
    }
})
  

app.mount('#app')