/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const b = new Vue({
    el: '#app',
    data: {
        number_test:0,
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

/***/ })
/******/ ]);