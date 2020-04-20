new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0,
    value: 'initial value'
  },
  methods: {
    increase: function(val) {
      this.counter+= val;
      console.log(event);
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    deadSpot: function(zevent) {
      zevent.stopPropagation();
    },
    alert: function() {
      console.log('weeeee key up, bro!!!');
    },
    updateValue: function(event) {
      this.value = event.target.value;
    }
  }
});