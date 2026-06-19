import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { changeName, increase } from "./userSlice";

export const useUserStore = create(
    immer((set)=>({
        // state 이름, 초기값
        user: {name: '유비', age: 20},
        // state 변경함수
        changeName: ()=>
            set((state)=>{
                state.user.name = '관우'
            }),
         increase: (amount) =>
            set((state) => {
                state.user.age += amount
            }),
        }))
    )
