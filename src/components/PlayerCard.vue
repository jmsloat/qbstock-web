<template>
  <div class="card column">

    <header class="card-header">
      <p class="card-header-title">
        {{player}}
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
    props: ['player'],
  }
</script>

<style scoped>

</style>
