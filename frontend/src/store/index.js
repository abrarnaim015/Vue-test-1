import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    setGetAlldata: [],
    setEditProfile: []
  },
  mutations: {
    setGetAlldata (state, payload) {
      state.setGetAlldata = payload
    },
    setEditProfile (state, payload) {
      state.setEditProfile = payload
    }
  },
  actions: {
    getAllData (context) {
      axios
        .get('/profile')
        .then(({ data }) => {
          context.commit('setGetAlldata', data)
        })
        .catch(console.log)
    },
    addNewProfile (context, newDataProfile) {
      return axios({
        url: '/profile',
        method: 'POST',
        data: newDataProfile
      })
    },
    editProfile (context, dataEdit) {
      context.commit('setEditProfile', dataEdit)
    }
  },
  modules: {
  }
})
