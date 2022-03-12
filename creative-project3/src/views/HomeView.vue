<template>
<div class = home-page>

<div class = home-container>
  <div class="search-wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>



    <form>
      <label>filter by: </label>
      <select v-model="selectedValue" @change="select(selectedValue)">
        <option value="">none</option>
        <option value="sticker">stickers</option>
        <option value="print">prints</option>
        <option value="other">other</option>

      </select>
      </form>

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
      selectedValue: '',
    }
  },
  computed: {
    products() {
    return this.$root.$data.products.filter(product => (product.type.search(this.selectedValue) >= 0)).filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },
  },
  methods: {

    select(type){
      this.type = type;
      console.log("the type is " + type);
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

  .home-container{
    display:flex;
  }

  .search-wrapper{
  width:100%;
  padding: 0;
  margin:0;
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
