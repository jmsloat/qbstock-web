<template>
  <tr>
    <td>{{player.shares}}</td>
    <td>{{player.tier}}</td>
    <td>{{player.name}}</td>
    <td>${{player.price}}</td>
    <td>{{playerValue}} </td>
  </tr>

</template>

<script>
  export default {
    name: 'player-table-row',
    props: ['player'],
    computed: {
      playerValue : function() {
        return '$' + (this.player.shares * this.player.price).toFixed(2);
      }
    }
  }
</script>

<style scoped>
</style>
