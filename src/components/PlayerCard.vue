<template>
  <div class="card">

    <header class="card-header">
      <p class="card-header-title">
        {{playerName}}
      </p>
    </header>

    <div class="card-content">

      <div class="content">
        Some player stuff here.
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'player-card',
    props: ['player-name'],
  }
</script>

<style scoped>

</style>
