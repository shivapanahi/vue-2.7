import axios from 'axios';
import Vue, { ref } from 'vue'
import Vuex from 'vuex'
import userName from "./login.module"
import  stores from './stores.module';
import  products from './products.module';
import  cart from './cart.module';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rules: {
      required: (value: any) => !!value || "فیلد اجباری",
    }
  },
  getters: {

  },
  mutations: {
  },
  actions: {

  },
  modules: {
    userName,
   stores,
   products,
   cart
  }
})
