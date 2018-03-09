<template>
  <div class="columns is-multiline">
    <player-card
      v-if="useCards"
      v-for="player in players"
      v-bind:player="player" :key="player.id"
    ></player-card>

    <table class="table is-hoverable is-fullwidth">
      <thead>
      <tr>
        <th>Shares</th>
        <th>Tier</th>
        <th>Name</th>
        <th>Price</th>
        <th>Investment</th>
      </tr>
      </thead>
      <tbody>
      <player-table-row
        v-for="player in players"
        v-bind:player="player" :key="player.id"
        v-if="!useCards">
      </player-table-row>
      </tbody>
    </table>

  </div>
</template>

<script>
  import PlayerCard from './PlayerCard';
  import PlayerTableRow from './PlayerTableRow';
  import db from 'src/db';

  export default {
    name: 'players',
    components: {
      PlayerTableRow,
      PlayerCard,
      db
    },
    data: function () {
      return {
        players: db.players,
        'useCards': false
      }
    },
  }
</script>

<style scoped>
</style>
