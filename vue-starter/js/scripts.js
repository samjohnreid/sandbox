new Vue({
  el: '#app',
  data: {
    value: 0
  },
  computed: {
    result() {
      if (this.value !== 37) {
        return 'not there yet';
      } else {
        return 'done!';
      }
    }
  },
  watch: {
    value: function() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    }
  }
});