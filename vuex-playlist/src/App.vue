<template>
  <div id="app">
      <!-- without vuex:
      <product-list-one v-bind:products="products"></product-list-one>
      <product-list-two v-bind:products="products"></product-list-two> -->

      <product-list-one></product-list-one>
      <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {

    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    },

    name: 'app',
    data () {
        return {
            // this goes to store.js
            // products: [
            //     {name: 'Banana Skin', price: 20},
            //     {name: 'Shiny Star', price: 40},
            //     {name: 'Green Shells', price: 60},
            //     {name: 'Red Shells', price: 80}
            // ]
        }
    }
}
</script>

<style>

</style>
