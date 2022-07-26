import {
    createStore
} from 'vuex'

const store = createStore({
    state() {
        return {
            productList: []
        }
    },
    mutations: {
        addProductCard(state, newCard) {
            state.productList.push(newCard)
        }
    }
})
export default store;