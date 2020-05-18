new Vue({
  el: '#app',
  data: {
    value: 0,
    attachRed: false,
    color: 'red',
    width: 200
  },
  computed: {
    result() {
      if (this.value !== 37) {
        return 'not there yet';
      } else {
        return 'done!';
      }
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      };
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