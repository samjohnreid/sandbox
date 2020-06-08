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
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  }
});