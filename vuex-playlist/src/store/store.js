import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },//state

    getters: {
        // this func will make a new list out of our data, and use modified data
        // define this function here instead of in components, and
        // we can call it in comps
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    }, //getters

    //changed data can be tracked
    mutations: {
        reducePrice: state => {
            state.products.forEach(product => {
                product.price -= 1;
            })
        }

    },//mutations

// IF WE WANT TO USE ASYNC!!
// Action is basically = mutation + asynchronous tasks
// you can't do async with mutation.
    actions: {
        reducePrice: context  => {
            setTimeout(function(){
                context.commit('reducePrice')
            }, 2000)
        }
    }










})
