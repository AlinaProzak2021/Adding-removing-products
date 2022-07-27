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
        },
        deleteProductCard(state, index) {
            state.productList.splice(index, 1)
        }
    }
})
export default store;