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
      <div class="card-footer">
        <!-- worry about not showing these for all users later - once we've introduced the concept of a user -->
        <buy-sell-button></buy-sell-button>
      </div>

    </div>
  </div>
</template>

<script>
  import BuySellButton from "./BuySellButton";

  export default {
    components: {BuySellButton},
    name: 'player-card',
    props: ['player'],
  }
</script>

<style scoped>

</style>
