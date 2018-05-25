<template>
  <div class="container has-text-centered">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="box">

          <div class="title">Login</div>
          <div class="notification is-danger" v-if="this.error">Failed to login. Is your username / password correct?</div>
          <form @submit.prevent="attemptToLogin">
            <div class="field">
              <div class="control">
                <input class="input is-medium" required v-model="username" type="text" placeholder="Username"/>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input is-medium" required v-model="password" type="password" placeholder="Password"/>
              </div>
            </div>

            <button v-bind:class="{'is-loading' : showingLoadingSpinner}"
                    class="button is-primary is-medium is-fullwidth"
                    type="submit">Login
            </button>
          </form>

          <!--</div>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'login',
    data: function () {
      return {
        showingLoadingSpinner: false,
        error: false,
        password: '',
        username: ''
      }
    },
    methods: {
      attemptToLogin: function (event) {
        this.setLoginLoadingSpinnerOn();
        this.$api.login(this.username, this.password)
          .then((response) => {
            console.log('successful promise resolution');
            this.$store.token = response.token;
            this.$store.authenticated = true;
            console.log('pushing route');

            this.$router.push('myteam');
            console.log('done');
          } )
          .catch((err) => {
            console.log('handling promise error case');
            this.error = true;
            this.showingLoadingSpinner = false
          });
      },
      setLoginLoadingSpinnerOn: function (event) {
        this.showingLoadingSpinner = true;
      }
    }
  }
</script>

<style scoped>
</style>
