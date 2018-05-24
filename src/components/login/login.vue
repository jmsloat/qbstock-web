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
                    type="submit" v-on:click="attemptToLogin">Login
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
        console.log('trying to login...');
        this.setLoginLoadingSpinnerOn();
        this.$api.login(this.username, this.password)
          .catch((err) => {
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
