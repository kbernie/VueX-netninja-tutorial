<template>
  <div id="product-list-one">
      <h2>Product List One</h2>
      <ul>
          <!-- 1: -->
          <!-- <li v-for="product in products"> -->
          <!-- 2: -->
          <li v-for="product in saleProducts">
              <span class="name">{{ product.name }}</span>
              <span class="price">£{{ product.price }}</span>
          </li>
      </ul>
      <!-- 3: -->
      <button v-on:click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
export default {
    // 1 - STATE:
    // without vuex:
    // props: ['products'],

    // with vuex:
    computed: {
        products(){
            return this.$store.state.products
        },
//---------------------------------------------------
    // 2 - GETTERS:
    // without vuex:
        // saleProducts(){
        //     var saleProducts = this.$store.state.products.map(product => {
        //         return {
        //             name: '**' + product.name + '**',
        //             price: product.price / 2
        //         }
        //     });
        //     return saleProducts;
        // }

        // with vuex:
        saleProducts(){
            return this.$store.getters.saleProducts
        }
    }, //computed

//---------------------------------------------------
    // 3 - MUTATIONS:
    // changed data is tracked
    // without vuex:
    methods: {
        // reducePrice: function(){
        //     this.$store.state.products.forEach(product => {
        //         product.price -= 1;
        //     })
        // }

    // vuex:  (commented out bc we use ACTIONS instead! which is almost the same)
    // reducePrice: function(){
    //     this.$store.commit('reducePrice');
    // }


//---------------------------------------------------
    // 4 - ACTIONS:
    // IF WE WANT TO USE ASYNC!!
    // Action is basically = mutation + asynchronous tasks
    // you can't do async with mutation.

    reducePrice: function(){
        this.$store.dispatch('reducePrice');
    }


    }//methods

}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
