import CartService from "@/services/CartService";
import axios from "axios";


const state = {
  cart: CartService.all(),
};

const getters = {};

const actions = {
  addProduct(context: any, payload: any) {
    CartService.add(payload)
    context.commit('SET_CART');
  },
  removeProduct(context: any, payload: any) {
    CartService.remove(payload)
    context.commit('SET_CART');
  },
  clear(context: any, payload: any) {
    CartService.clear();
    context.commit('CLEAR_CART');
  },
  sendData(context: any, payload: any) {
    return new Promise((resolve, reject) => {
      axios.post(`http://localhost:3000/carts`, payload
      )
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
};

const mutations = {
  SET_CART(state: any, data: any) {
    state.cart = CartService.all()
  },
  CLEAR_CART(state: any, data: any) {
    state.cart = []
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
