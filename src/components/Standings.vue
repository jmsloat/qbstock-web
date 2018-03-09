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
      <tr
        v-for="user in users"
        v-on:click="redirect_to_team_page(user.id)">
        <td>{{user.name}}</td>
        <td>${{user.money}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import StandingsRow from './StandingsRow'
  import {api} from 'src/api'

  export default {
    name: 'standings',
    components: {
      StandingsRow
    },
    data: function () {
      return {
        users: api.get_users()
      }
    },
    methods: {
      redirect_to_team_page: function (user_id) {
        console.log('redirecting to: ' + user_id);
        this.$router.push({name: 'team', params: {teamid: user_id}})
      }
    }
  }

</script>

<style scoped>
  .table.hover:hover {
    background-color: lightblue;
  }
</style>
