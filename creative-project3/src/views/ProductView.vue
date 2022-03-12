<template>
<div class="productSpotLight">
  <router-link to="/" v-on:click.native="goBack()">
    <p>back to store</p>
  </router-link>



  <div class="pageInfo">
    <img id="theImage" :src="'/images/' + this.$root.$data.products[this.$root.$data.selectedProdId - 1].image">
    <div class="prodText">
      <h1>{{product.name}}</h1>
      <p>{{product.price}}</p>
      <form>
        <label>quantity:</label>
        <input type="number" min="1" value=1>
      </form>
      <button v-on:click.native="addtoCart()">Add to Cart</button>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'ProductView',
  components: {
    ProductList
  },
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    product() {
      return this.$root.$data.products[this.$root.$data.selectedProdId - 1];
    }
  },

  methods: {
    addToCart() {
      let id = this.$root.$data.selectedProdId;
      console.log("purchasing" + this.$root.$data.products[id - 1].name);
      let o = {
        name: this.$root.$data.products[id - 1].name,
        price: this.$root.$data.products[id - 1].price,
        id: id,
        type: this.$root.$data.products[id - 1].type,
        image: this.$root.$data.products[id - 1].image
      };

      this.$root.$data.cart.push(o);

    },
    goBack() {
      this.$root.$data.selectedProdId = 0;
    },

  }
}
</script>

<style scoped>
.productSpotLight {
  width: 100%;
  height: 100%;
  padding: 2em;
}

.pageInfo {
  width: 80%;
  height: 80%;
  padding: 1em;
  display: flex;
}

#theImage {
  height: 100%;
  width: 100%;
  object-fit: contain;

}

input {
  text-align: center;
}

.prodText {
  padding: 1em;
  align: center;
  text-align: center;
}
</style>
