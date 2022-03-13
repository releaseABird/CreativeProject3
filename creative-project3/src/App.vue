<template>
<div id="app">


  <div class="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
        <img class="sidebar-logo" alt="Release A Bird" src="../images/mylogo.png">
      </div>

      <ul class="list-unstyled components">
        <p id="sub-title">Lisa Bird's Shop</p>
        <li>
          <router-link to="/">
            <a href="#">Home</a>
          </router-link>

        </li>
        <li>
          <a href="/about">About</a>
        </li>

        <li>
        <router-link to="/cart">
        <p>Click to Check Out</p>
        <img class="cartImg" src="../images/shoppingCart.png">
        <p v-show="cartLength === 1">Your Cart: {{cartLength}} item</p>
        <p v-show="cartLength != 1">Your Cart: {{cartLength}} items</p>
        </router-link>
        </li>

      </ul>

    </nav>




    <div id="content">
      <button type="button" id="sidebarCollapse" class="navbar-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>


    </div>


    <div class="page">
      <router-view />
    </div>


  </div>

  <div class="footer-container">
    <footer>
      <div class="footer-item">
        <br>
        <p>My github: <a href="https://github.com/releaseABird/CreativeProject3.git">https://github.com/releaseABird/CreativeProject3.git</a></p>
      </div>
    </footer>
  </div>
</div>
</template>''

<script>
export default{
  name:'AppVue',
  computed: {
    cartLength() {
      return this.$root.$data.cart.length;
    }
  }
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.cartImg{
height: 100%;
width: 100%;
object-fit: contain;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer-container {
  background-color: #aa7946;
  height: 5em;

}

#sub-title p {
  color: black;
}

.page {
  padding: 2em;
}
</style>
