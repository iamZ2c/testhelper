require('./css/normal.css')
import {b} from './main.js'

console.log(b)

import Vue from "vue";
// import App from "./vue/App"
import App from "./vue/App.vue";
//拆分出来
// npm install --save-dev vue-loader vue-template-compiler


new Vue({
    el: '#app',
    template: '<app></app>',
    components:{
        App
    }
})

document.writeln('<button>我是按钮</button>')
document.writeln('<button>我也是按钮</button>')