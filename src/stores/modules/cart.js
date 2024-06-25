import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product) {
      product.price = parseFloat(product.price) || 0;
      product.quantity = parseInt(product.quantity) || 1;
      this.cartItems.push(product);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    clearCart() {
      this.cartItems = [];
    },
    incrementItemQuantity(index) {
      if (this.cartItems[index]) {
        this.cartItems[index].quantity += 1;
      }
    },
    decrementItemQuantity(index) {
      if (this.cartItems[index] && this.cartItems[index].quantity > 0) {
        this.cartItems[index].quantity -= 1;
      }
    },
  },
  getters: {
    cartItemCount() {
      return this.cartItems.length;
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
});
