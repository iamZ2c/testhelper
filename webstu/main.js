const b = new Vue({
    el: '#app',
    data: {
        xxyy:[],
        fruit:'',
        fruits:[],
        fruitxx:['卧槽','你草','大家草'],
        hobbies:[],
        is_agree:false,
        what_fuck:'男',
        message: "z",
        books: [{
            id: 1,
            name: '<<算法导论>>',
            data: '2006-09',
            price: 86,
            count: 1,
            is_display: 'block'
        },
            {
                id: 2,
                name: '<<金瓶梅>>',
                data: '2006-09',
                price: 86,
                count: 1,
                is_display: 'block'
            }, {
                id: 2,
                name: '<<ICE库里亩>>',
                data: '2006-09',
                price: 86,
                count: 1,
                is_display: 'block'
            }, {
                id: 3,
                name: '<<python>>',
                data: '2006-09',
                price: 86,
                count: 1,
                is_display: 'block'
            }, {
                id: 4,
                name: '<<html>>',
                data: '2006-09',
                price: 86,
                count: 1,
                is_display: 'block'
            }, {
                id: 5,
                name: '<<fuck>>',
                data: '2006-09',
                price: 86,
                count: 1,
                is_display: 'block'
            },
        ],

    },
    methods:{
        get_price(count,price){
            return '$' + count * price.toFixed(2)
        },
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            if (this.books[index].count <= 0){

            }else{
                this.books[index].count--
            }
        },
        remove(index){
            this.books.splice(index,1)
        },
        remove2(index){
            this.books[index].is_display = 'none'
        },
    },
    filters:{
        show_price(count, price){
            return '$' + count * price.toFixed(2)
        }
    },
})