<template>
  <div class="columns is-multiline">
    <player-card
      v-if="useCards"
      v-for="player in playerlist"
      v-bind:player="player" :key="player.id"
    />

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
        v-for="player in playerlist"
        v-bind:player="player" :key="player.id"
        v-if="!useCards"
      />
      </tbody>
    </table>

  </div>
</template>

<script>
  import PlayerCard from './PlayerCard';
  import PlayerTableRow from './PlayerTableRow';
  import {api} from 'src/api';

  export default {
    name: 'players',
    components: {
      PlayerTableRow,
      PlayerCard,
    },
    data: function () {
      return {
        playerlist: [],
        useCards: false
      }
    },

    created: function() {
      this.playerlist = api.get_roster(this.$route.params.teamid);
    }

  }
</script>

<style scoped>
</style>
