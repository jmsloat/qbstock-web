<template>
  <div class="card-footer">
    <a v-on:click="subtract_shares" href="#" class="card-footer-item">-</a>
    <div class="card-footer-item">
      {{shares}}
      <div v-if="this.diff !== 0" class="diff-counter">
        ({{this.diff}})
      </div>
    </div>
    <a v-on:click="add_shares" href="#" class="card-footer-item">+</a>
  </div>
</template>

<script>
  export default {
    name: 'buy-sell-button',
    props: ['shares'],
    methods: {
      subtract_shares: function () {
        if (this.shares > 0)
          this.shares--;

        this.update_diff()
      },

      add_shares: function () {
        this.shares++
        this.update_diff()
      },
      update_diff: function () {
        this.diff = this.shares - this.initial_shares
      },
      data() {
        return {
          diff: 0,
          initial_shares: -1
        }
      }
    },
    created: function () {
      this.initial_shares = this.shares
    }
  }
</script>

<style scoped>
  .diff-counter {
    margin-right: .2em;
    margin-left: .2em;
  }
</style>
