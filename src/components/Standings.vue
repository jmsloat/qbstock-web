<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Standings
          </h1>
        </div>
      </div>
    </section>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <th> Team </th>
        <th> Money </th>
      </thead>

      <tbody>
      <tr>
        <td> James </td>
        <td> $500 </td>
      </tr>
      <tr>
        <td> Kevin </td>
        <td> $400 </td>
      </tr>
      <tr>
        <td> Joe </td>
        <td> $22 </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'standings',
  }
</script>

<style scoped>
  .table.hover:hover {
    background-color: lightblue;
  }
</style>
