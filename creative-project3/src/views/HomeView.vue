<template>
<div class = home-page>



  <div class="search-wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>

    <div id="side">
      
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/love.png">
          <p v-show="cartLength === 1">{{cartLength}} item</p>
          <p v-show="cartLength != 1"> {{cartLength}} items</p>
        </div>
      </router-link>
    </div>

    <hr>
  </div>




  <ProductList
  :products="products"
  />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'HomeView',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
    return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },

    sortedArray() {
		let sortedProducts = this.$root.$data.products;

		sortedProducts = sortedProducts.sort((a,b) => {
			let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
			if (fa < fb) {
				return -1
			}
			if (fa > fb) {
				return 1
			}
			return 0
		})
	}

  }
}
</script>

<style>
.home-page {
flex-direction: right;
}
.search-wrapper {
  text-align:right;
  align:right;
  align-items: stretch;


}

  .logo{
  width: 50%;
  height: auto;
  object-fit: contain;

  }


.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
