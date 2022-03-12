<template>
  <div class="productSpotLight">
    <a href="/">back to store</a>

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
