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
      ],
      info:{name:'zhangsan',age:13}
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
      addStu:state => state.students.push({name: "lilei", age:11}),
      addInfo:state => state.info['addr'] = 'beij',


    },
    actions:{
      asyLog(context, payload){
        return new Promise( (resolve, reject) => {
          setTimeout(()=>{
            context.commit('addStu')
            resolve('123123')
          },2000)

        })
      }
    },
    getters:{
      filterAge(state) {
        return age => { return state.students.filter(s => s.age>age) }

      }
    }
  }
)


export default store
