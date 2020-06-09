var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'img/vmSocks-green-onWhite.jpg',
    inventory: 12,
    onSale: false,
    details: ["80% Cotton", "20% Polyster", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "img/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "img/vmSocks-blue-onWhite.jpg"
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage;
    }
  }
});