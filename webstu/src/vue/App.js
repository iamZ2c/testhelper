export default {
    template: '<div><button @click="cil()">按钮</button>{{message}}</div>',
    data() {
        return {
            message: "hello webpack"
        }
    },
    methods: {
        cil() {
            this.message = 'hello web'
        },
    },
}