import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      contato: [],
      getComentario: []
  },
  mutations: {
      setContato(state, payload){
          state.contato.push(payload)
      },
      setComentarioGet(state, payload){
          state.getComentario.push(payload)
      }
  },
  actions: {
      // Contato
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
      },

      // /comentario GET
      getComentario({ commit }){
        axios({
            method: 'get', //you can set what request you want to be
            url: 'https://localhost:5001/Home/RetornaComentarios',
        }).then(res => {
            res.data.forEach(element => {
                commit('setComentarioGet', element)
            });
        }).catch(err => {
            alert(err)
        })
      }
  },
  modules: {
  },
  getters: {
      getCom(state){
          return state.getComentario
      }
  }
})

export default store
