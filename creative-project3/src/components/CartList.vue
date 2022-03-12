<template>




<div class="wrapper">

  <div class="products">
  <div class="total">
    <h1 v-show="products.length > 0">Your total: ${{total}}</h1>
  </div>
    <div class="product" v-for="product in products" :key="product.id">

      <div class="image">
        <img :src="'/images/'+product.image">
      </div>
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button class="auto" v-on:click="removeFromCart(product.id)">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ProductList',
  props: {
    products: Array,


  },
  computed: {
  total() {
    let tot = 0.00;
    for (let i = 0; i < this.$props.products.length; i++) {
      tot += parseFloat(this.$props.products[i].price.substring(1));
      }
    return tot.toFixed(2);
  }

  },


  methods: {

    removeFromCart(id) {
    for (let i = 0; i < this.$props.products.length; i++) {
      if (this.$props.products[i].id === id){
      console.log("deleting " + this.$props.products[i].name);
      this.$root.$data.cart.splice(i, 1);
      break;
      }

    }

    }
  }
}

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #b45f06;
  padding: 5px 5px;
  height: 80px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #ff6d6d;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
