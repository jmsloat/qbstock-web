<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <router-link class="navbar-item" to="/myteam">My Team</router-link>
      <router-link class="navbar-item" to="/standings">Standings</router-link>
      <router-link class="navbar-item" to="/players">Players</router-link>

    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',
  }
</script>

<style scoped>
</style>
