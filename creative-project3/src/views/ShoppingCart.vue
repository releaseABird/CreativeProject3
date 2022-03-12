<template>
<div>
  <a href="/">back to shopping</a>
  <hr>
  <h1> Your Cart: </h1>
  <h2 v-show="cartLength === 0">There are no Items in your Cart.
  </h2>
  <img v-show="cartLength === 0" src="../../images/emptyCart.png" class="emptyCart">
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

<style>
.emptyCart {
width: 60%;
height: 60%;
object-fit: contain;

}
</style>
