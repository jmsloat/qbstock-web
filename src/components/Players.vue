<template>
	<div class="columns is-multiline">
    <player-card
      v-for="player in players"
      v-bind:player="player"
      :key="player.id"

    ></player-card>
	</div>
</template>

<script>
  import PlayerCard from './PlayerCard';

  export default {
    name: 'players',
    components: {
      PlayerCard
    },
    data : function() {
      return {
        players : [
          {id: 1, name: 'Player 1', price: '12.20'},
          {id: 2, name: 'Player 2', price: '13.10'},
          {id: 3, name: 'Player 4', price: '5.50'},
          {id: 4, name: 'Player 6', price: '6.63'},
        ]
      }
    },
  }
</script>

<style scoped>
</style>
