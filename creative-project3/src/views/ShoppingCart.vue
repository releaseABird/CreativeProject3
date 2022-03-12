<template>
<div>
  <a href="/">back to shopping</a>
  <h1> Your Cart </h1>
  <h2 v-show="cartLength === 0">There are no Items in your Cart.</h2>
  <CartList :products="cart" />

</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'ShoppingCart',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
    cartLength() {
      return this.$root.$data.cart.length;
    }
  },
  methods: {

  }
}
</script>
