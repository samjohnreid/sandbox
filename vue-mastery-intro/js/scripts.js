Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
});

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
          
      <div class="product-image">
        <img :src="image">
      </div>

      <div class="product-info">

        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p
          v-else
          :class="{ 'out-of-stock': !inStock }"
        >Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        
        <p v-if="onSaleMsg">{{ onSaleMsg }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <product-details :details="details"></product-details>

        <div>
          <p>Available in these sizes:</p>
          <ul>
            <li v-for="size in sizes">{{ size }}</li>
          </ul>
        </div>

        <div
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          class="color-box"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)"
        >
        </div>

        <div class="button-wrap">
          <button
            @click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
          >Add to Cart</button>
          <button @click="removeFromCart">Remove from Cart</button>
        </div>

        <div class="cart">
          <p>Cart ({{ cart }})</p>
        </div>

      </div>

    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      details: ["80% Cotton", "20% Polyster", "Gender-neutral"],
      selectedVariant: 0,
      onSale: false,
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "img/vmSocks-green-onWhite.jpg",
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "img/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0
        }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      cart: 0
    }
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
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSaleMsg() {
      if (this.onSale) {
        return `${this.brand} ${this.product} is currently on sale!`;
      }
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
  }
});