<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">

      <div class="section">
        <router-view></router-view>
      </div>
    </div>
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
