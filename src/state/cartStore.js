import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useCartStore = create(
  immer((set) => ({
    cart: [
            { id: 0, item: 'White and Black', amount: 2 },
            { id: 2, item: 'Grey Yordan', amount: 1 }
    ],

    addCount: (id) =>
      set((state) => {
        const num = state.cart.findIndex((a) => a.id === id);      
        state.cart[num].amount++;
      }),

    // 상품 수량 1개 줄이기 (0개 이하는 알림 띄움)

    decreaseCount: (id) =>
      set((state) => {
        const num = state.cart.findIndex((a) => a.id === id);
        console.log(num);
        if (state.cart[num].amount > 0) {
          state.cart[num].amount--;
        } else if (state.cart[num].amount === 0) {
          alert("상품이 더 이상 없습니다.");
        }
      }),

    addItem: (newItem) =>
      set((state) => {
        const num = state.cart.findIndex((a) => a.id === newItem.id);
        if (num !== -1) {
          state.cart[num].amount++;
        } else {
          state.cart.push(newItem);
        }
      }),

    deleteItem: (id) =>
      set((state) => {
        const num = state.cart.findIndex((a) => a.id === id);
        state.cart.splice(num, 1);
      }),

    sortName: () =>
      set((state) => {
        state.cart.sort((a, b) => (a.name > b.name ? 1 : -1));
      }),
  }))
);