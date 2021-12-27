const state = {
    menuList: ''
}

const mutations = {
    SET_MENU_LIST: (state, menuList) => {
        console.log(menuList)
        state.menuList = menuList
    }
}

const actions = {
    setMenus({ commit }, menuList) {
        commit("SET_MENU_LIST", menuList);
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}