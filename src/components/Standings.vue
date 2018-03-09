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
      <tr>
        <th> Team</th>
        <th> Money</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td> James</td>
        <td> $500</td>
      </tr>
      <tr>
        <td> Kevin</td>
        <td> $400</td>
      </tr>
      <tr>
        <td> Joe</td>
        <td> $22</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import StandingsRow from './StandingsRow'
  import db from 'src/db'

  export default {
    name: 'standings',
    components : {
      StandingsRow
    }
  }
</script>

<style scoped>
  .table.hover:hover {
    background-color: lightblue;
  }
</style>
