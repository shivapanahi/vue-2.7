import axios from "axios";


const state = {
    products: [],
};

const getters = {
  
};

const actions = {
    getProducts(context:any, payload:any) {
        return new Promise((resolve, reject) => {
          axios.get(`http://localhost:3000/products`, payload
          )
            .then(({ data }) => {
              resolve(data);
              context.commit('SET_PRODUCTS', data);
            })
            .catch(({ response }) => {
              reject(response);
            });
        });
      },
};

const mutations = {
    SET_PRODUCTS(state:any, data:any) {
        state.products = data
      },
};

export default {
  state,
  actions,
  mutations,
  getters
};
