
import { defineStore } from 'pinia';

export const useDealStore = defineStore('dealStore', {
  state: () => ({
    selectedCard: null,
  }),
  actions: {
    selectCard(card) {
      this.selectedCard = card;
    },
    clearCard() {
      this.selectedCard = null;
    },
  },
});