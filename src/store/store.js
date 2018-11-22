import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    leftListFriends: [],
    rightListFriends: [],
    filterleftListFriends: [],
    filterRightListFriends: []
  },

  actions: {
    getFriends({ commit }) {
      VK.init({
        apiId: 6502079
      });
      return new Promise((resolve, reject) => {
        VK.Auth.login(data => {
          if (data.session) {
            resolve();
          } else {
            reject(new Error("Не удалось авторизироваться"));
          }
        }, 2);
        function callAPI(method, params) {
          params.v = "5.76";

          VK.api(method, params, data => {
            if (data.error) {
              reject(data.error);
            } else {
              commit("setFriendList", {
                list: "leftListFriends",
                data: data.response.items
              });
              resolve(data.response);
              commit("setFriendListLeft");
              commit("setFriendListRight");
            }
          });
        }
        return callAPI("friends.get", { fields: "photo_100" });
      });
    }
  },
  mutations: {
    setFriendList(state, { list, data }) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      } else {
        state[list] = data;
      }
    },

    setFriendListLeft(state) {
      state.filterleftListFriends = state.leftListFriends;
    },

    setFriendListRight(state) {
      state.filterRightListFriends = state.rightListFriends;
    },

    addFriend(state, id) {
      const commentIndex = state.filterleftListFriends.findIndex(
        a => a.id === Number(id)
      );
      let removeComment = state.filterleftListFriends.splice(commentIndex, 1);
      state.rightListFriends.push(removeComment[0]);
    },

    removeFriend(state, id) {
      const commentIndex = state.rightListFriends.findIndex(
        a => a.id === Number(id)
      );
      let removeComment = state.rightListFriends.splice(commentIndex, 1);
      state.filterleftListFriends.push(removeComment[0]);
    },

    saveFriends(state) {
      localStorage.setItem("store", JSON.stringify(state));
      alert("save successfully!");
    }
  },
  getters: {},
  modules: {}
});
