<template>
  <div id="app">
    <navbar />

    <div class="section">
      <div class="container">
        <router-view />
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Copyright sloat 2017
          </p>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>

  import navbar from './components/Navbar'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      navbar
    }
  }
</script>

<style>
</style>
