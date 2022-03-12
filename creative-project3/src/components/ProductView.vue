<template>
<div class="wrapper">

  <div class="product">

      <div class="prod-image">
          <img id="theImage" :src="'/images/' + this.$root.$data.products[this.$root.$data.selectedProdId - 1].image">
      </div>
      <div class="info">
        <h1>{{product.name}} <br> {{product.price}}</h1>
      </div>

  </div>
</div>
</template>

<script>

export default {
  name: 'ProductList',
  props: {
    product: Object,

  },
  methods: {
    addToCart(id) {
    console.log(this.$root.$data.products[id - 1].name);
    let o = {name: this.$root.$data.products[id - 1].name, price: this.$root.$data.products[id - 1].price, id: id, type: this.$root.$data.products[id - 1].type, image: this.$root.$data.products[id - 1].image};

    this.$root.$data.cart.push(o);

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
