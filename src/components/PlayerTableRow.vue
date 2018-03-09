<template>
  <tr>
    <td>{{player.shares}}</td>
    <td>{{player.tier}}</td>
    <td>{{player.name}}</td>
    <td>{{player.price}}</td>
    <!--td>${{ player.price * player.shares}}</td-->
  </tr>

</template>

<script>
  export default {
    name: 'player-table-row',
    props: ['player']
  }
</script>

<style scoped>
</style>
