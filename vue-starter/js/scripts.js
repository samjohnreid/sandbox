new Vue({
  el: '#app',
  data: {
    YOUR_NAME: 'Samuel Reid',
    AGE: 41,
    image: 'https://scene7.zumiez.com/is/image/zumiez/Zoom_PDP/Primitive-x-Rick-and-Morty-Pickle-Rick-Sticker-_309256-front-US.jpg'
  },
  methods: {
    ageMultiplier: function() {
      return this.AGE * 3;
    },
    randomFloat: function() {
      return Math.random();
    }
  }
});