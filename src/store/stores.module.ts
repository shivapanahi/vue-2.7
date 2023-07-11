import apis from "../services/apis"

const state = {
  stores: [],
};

const getters = {};

const actions = {
  getStores(context:any, payload:any) {
    return new Promise((resolve, reject) => {
      apis.stores(payload)
        .then(({ data }) => {
          resolve(data);
          context.commit('SET_STORES', data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
};

const mutations = {
  SET_STORES(state:any, data:any) {
    state.stores = data
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
