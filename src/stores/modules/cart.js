import { defineStore } from "pinia";
import { useApi } from "@/components/api/useApi";
import axios from "axios";

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
// function getLocalStorageItem(name) {
//   return localStorage.getItem(name);
// }

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cartItems: [],
  }),
  actions: {
    async fetchCartItems() {
      const userId = getCookie("userId");

      if (!userId) {
        console.error("User ID not found in cookies.");
        return;
      }

      try {
        // Fetch cart items
        const response = await axios.get(
          `${apiUrl}/addtoCart/getAllCartItems`,
          {
            headers: {
              "user-id": userId,
            },
          }
        );

        const cartItems = response.data.data.cartItems;

        // Fetch product details for each cart item
        const productDetailsPromises = cartItems.map((item) => {
          return axios.get(`${apiUrl}/products/getMe`, {
            headers: {
              'user-id': userId,
              "product-id": item.product,
            },
          });
        });

        const productDetailsResponses = await Promise.all(
          productDetailsPromises
        );

        // Map cartItems to include product details
        this.cartItems = cartItems.map((item, index) => {
          const productDetails =
            productDetailsResponses[index].data.data.product;
          return {
            ...item,
            ...productDetails,
            price: parseFloat(productDetails.price),
            quantity: item.quantity,
          };
        });
      } catch (error) {
        // console.error("Error fetching cart items or product details:", error);
        this.cartItems = [];
      }
    },
    addToCart(product) {
      product.price = parseFloat(product.price) || 0;
      product.quantity = parseInt(product.quantity) || 1;
      product.image = (product.images && product.images[0]) || "";
      const existingProduct = this.cartItems.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        this.cartItems.push(product);
      }
    },
    clearCart() {
      this.cartItems = [];
    },
    async removeFromCart(index) {
      const userId = getCookie("userId");
      const item = this.cartItems[index];

      try {
        await axios.delete(`${apiUrl}/addtoCart/removeMe`, {
          headers: {
            "user-id": userId,
            "product-id": item._id,
          },
        });
        this.cartItems.splice(index, 1);
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    },
   async incrementItemQuantity(index) {
    const userId = getCookie("userId");
    const item = this.cartItems[index]; 
      if (this.cartItems[index]) {
        this.cartItems[index].quantity += 1;
      }
      try {
        await axios.patch(`${apiUrl}/addtoCart/updateMe`, {
          action: "increase"
        },
        {
          headers: {
            'user-id': userId,
            'product-id': item._id,
          }
        });
      } catch(error) {
        console.error("Error updating item quantity", error)
      }
    },
    async decrementItemQuantity(index) {
      const userId = getCookie("userId");
      const item = this.cartItems[index]; 
      if (this.cartItems[index] && this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity -= 1;
      }
      try {
        await axios.patch(`${apiUrl}/addtoCart/updateMe`, {
          action: "decrease"
        },
        {
          headers: {
            'user-id': userId,
            'product-id': item._id,
          }
        });
      } catch(error) {
        console.error("Error updating item quantity", error)
      }
    },
  },
  getters: {
    cartItemCount() {
      return this.cartItems.length;
    },
    totalPrice() {
      return Array.isArray(this.cartItems)
        ? this.cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )
        : 0;
    },
  },
});
