require('./css/normal.css')
import {b} from './main.js'

console.log(b)

import Vue from "vue";
import App from "./vue/App"
//拆分出来



new Vue({
    el: '#app',
    template: '<app></app>',
    components:{
        App
    }
})