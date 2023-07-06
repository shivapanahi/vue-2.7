import axios from "axios";


const state = {
  userName: null,
};

const getters = {
  
};

const actions = {
  login(context:any, payload:any) {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/users`, { params: payload }
      )
        .then(({ data }) => {
          resolve(data);
          context.commit('SET_USER', data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
};

const mutations = {
  SET_USER(state:any, data:any) {
    state.userName = data[0].username
    localStorage.setItem('user', JSON.stringify(data[0]))
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
