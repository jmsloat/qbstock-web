<template>
	<div class="columns">
    <player-card
      v-for="player in players"
      v-bind:player="player"
    ></player-card>
	</div>
</template>

<script>
  import PlayerCard from './PlayerCard';

  export default {
    name: 'players',
    components: {
      PlayerCard,
      'player-card': PlayerCard},
    data : function() {
      return {
        players : [
          'Some Player',
          'Another Player...',
          'a third player'
        ]
      }
    },
  }
</script>

<style scoped>
</style>
