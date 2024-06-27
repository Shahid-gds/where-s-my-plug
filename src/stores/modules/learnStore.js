
import { defineStore } from 'pinia';

export const useLearnStore = defineStore('learnStore', {
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