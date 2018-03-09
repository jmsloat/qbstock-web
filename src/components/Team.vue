<template>

  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Team
          </h1>
        </div>
      </div>
    </section>
    <players/>
  </div>

</template>

<script>
  import Players from './Players';

  export default {
    components: {Players},
    name: 'team',
    created : function() {
      console.log('created');
      console.log(this.$route.params.teamid);
    },
  }
</script>

<style scoped>

</style>
