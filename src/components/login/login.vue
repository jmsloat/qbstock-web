<template>
  <div class="container has-text-centered">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="box">

          <div class="title">Login</div>
          <form @submit.prevent="login">
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

            <button class="button is-primary is-medium is-fullwidth" type="submit">Login</button>
          </form>

          <!--</div>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'login.vue'
  }
</script>

<style scoped>
</style>
