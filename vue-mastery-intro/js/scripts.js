var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'img/vmSocks-green-onWhite.jpg',
    inventory: 0,
    onSale: false,
    inStock: false,
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
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});