Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
    
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <b>Would you recommend this product?</b>
        <input type="radio" id="no" value="no" v-model="rec">
        <label for="no">No</label>
        <input type="radio" id="yes" value="yes" v-model="rec">
        <label for="yes">Yes</label>
      <p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    

    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      rec: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating && this.rec) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          rec: this.rec
        };
        this.$emit('review-submitted', productReview),
        this.name = null,
        this.review = null,
        this.rating = null,
        this.rec = null
      } else {
        if (!this.name) this.errors.push('Name required!')
        if (!this.review) this.errors.push('Review required!')
        if (!this.rating) this.errors.push('Rating required!')
        if (!this.rec) this.errors.push('Recommendation required!')
      }
    }
  }
});

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

      </div>

      <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
            <p>{{ review.name }}</p>
            <p>Rating: {{ review.rating }}</p>
            <p>{{ review.review }}</p>
            <p>Recommend? {{ review.rec }}</p>
          </li>
        </ul>
      </div>

      <product-review @review-submitted="addReview"></product-review>

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
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    removeFromCart() {
      this.$emit('remove-from-cart');
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addReview(productReview) {
      this.reviews.push(productReview)
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
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart(index) {
      if (this.cart.length > 0) {
        this.cart.splice(index, 1);
      }
    }
  }
});