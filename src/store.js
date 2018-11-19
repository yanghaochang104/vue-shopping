import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        purchase:[],
        showCart:false
    },
    mutations:{
        addToPurchase: (state, payload) => {
            state.purchase.push(payload);
        },
        removePurchase:(state, payload) => {
            state.purchase.splice(payload,1);
        },
        cleanUpPurchase:(state) => {
            state.purchase = [];
        },
        toggleCartMode:(state) => {
            state.showCart = ! state.showCart;
        }
    }
});