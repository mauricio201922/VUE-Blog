import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      contato: []
  },
  mutations: {
      setIndex(state, payload){
        state.i = payload
      },
      setContato(state, payload){
          state.contato.push(payload)
      },
  },
  actions: {
      SalvandoContato({ commit }, value){
        commit('setContato', value)
        axios({
            method: 'post',
            url: 'https://localhost:5001/Contato/EnviarContato?nome=' + 
            this.state.contato[this.state.contato.length - 1].nome + 
            '&email=' + 
            this.state.contato[this.state.contato.length - 1].email + 
            '&telefone=' + 
            this.state.contato[this.state.contato.length - 1].telefone + 
            '&mensagem=' + 
            this.state.contato[this.state.contato.length - 1].mensagem
        }).then(() => {
            console.log("\nFoi")
        }).catch(err => {
            alert(err)
        })
      }
  },
  modules: {
  },
  getters: {
  }
})

export default store
