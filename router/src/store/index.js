import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store(
  {
    state:{
      counter: 0,
      students: [{
        name:'zhangsan',
        age: 12
      },
        {
          name:'zhangsan2',
          age: 13
        },
        {
          name:'zhangsan3',
          age: 14
        },
      ]
    },
    mutations:{
      increment(state) {
        state.counter++
      },
      decrement(state) {
        state.counter--
      },
      addCount(state, payload) {
        state.counter += payload.count
      },
      addStu:state => state.students.push({name: "lilei", age:11})
    },
    actions:{
    },
    getters:{
      filterAge(state) {
        return age => { return state.students.filter(s => s.age>age) }


      }
    }
  }
)


export default store
