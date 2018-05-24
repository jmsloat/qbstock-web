import Vue from 'vue'

// mixin for injection into components
Vue.mixin({
  beforeCreate() {
    const options = this.$options;
    if (options.store) {
      this.$store = options.store;
    }
    else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }

  }
});

let store = {
  logged_in : false,
  token: ''
};

export {store};

