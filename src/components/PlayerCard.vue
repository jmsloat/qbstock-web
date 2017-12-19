<template>
  <div class="column is-one-third">
    <div class="card">

      <header class="card-header">
        <p class="card-header-title">
          {{player.name}}
        </p>
      </header>

      <div class="card-content">
          <div class="level content">
              <div class="level-item">
                <div>
					        {{player.price}}
                </div>
              </div>
              <div class="level-item">
                Some player stuff here.
              </div>
          </div>

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
