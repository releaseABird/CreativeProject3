<template>
<div class="wrapper">

  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">

      <div class="image">
        <img :src="'/images/'+product.image">
      </div>
      <div class="info">
        <router-link to="/product" v-on:click.native="selectProd(product.id)">
        <h1>{{product.name}} <br> {{product.price}}</h1>
        </router-link>
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
  methods: {
    selectProd(id) {
      console.log(this.$root.$data.products[id - 1].name);
      this.$root.$data.selectedProdId = id;

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
  background:#ddcbb8;
}

.product img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #b45f06;
  padding: 10px 15px;
  height: 80px;
}

.info ul li a:hover {
    color: #76a5af;
}

.info h1 {
  font-size: 16px;
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
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
