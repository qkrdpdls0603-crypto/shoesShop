import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increase } from '../state/userSlice'
import { addCount, sortName } from '../state/cartSlice'
// import Order from './Order'
import { useUserStore } from '../state/useStore'
import { useCartStore } from '../state/cartStore'


const Cart = () => {
    // const dispatch = useDispatch()
    // const user = useSelector(state => state.user)
    // const cart = useSelector(state => state.cart)
    // const {name, age} = user

    // zustand
    const user = useUserStore((state) => state.user)
    const cart = useCartStore((state) => state.cart)
    const { name, age } = user

    const { changeName, increase } = useUserStore()
    const { addCount, decreaseCount, deleteItem, sortName } = useCartStore()

    
    return (
        <>
            <div className="flex flex-col items-center w-full space-y-5">
                <h5 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-1.5">
                    {name}({age})의 장바구니
                </h5>

                <div className="flex flex-wrap justify-center gap-2.5 w-full">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 transform" onClick={()=>{
                        changeName()
                    }}>
                        관우로 이름 바꾸기
                    </button>

                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 transform flex items-center gap-1" onClick={()=>{
                        increase(1)
                    }}>
                        나이 +
                    </button>

                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium text-sm px-4 py-2.5 rounded-xl transition-all active:scale-95 transform flex items-center gap-1" onClick={()=>{
                        increase(-1)
                    }}>
                        나이 -
                    </button>
                </div>

                <div className="max-w-7xl mx-auto px-4 w-full py-8">
                    <div className="border border-gray-200 mb-5">
                        <table className="min-w-full divide-y divide-gray-200 text-left text-gray-500">
                            <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider font-semibold">
                                <tr>
                                    <th scope="col" className="px-6 py-3.5">id</th>
                                    <th scope="col" className="px-6 py-3.5">상품이미지</th>
                                    <th scope="col" className="px-6 py-3.5">상품명</th>
                                    <th scope="col" className="px-6 py-3.5">가격</th>
                                    <th scope="col" className="px-6 py-3.5">수량</th>
                                    <th scope="col" className="px-6 py-3.5 text-center">변경하기</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-100 text-gray-900">
                                {
                                    cart.map(value =>
                                        <tr className="hover:bg-gray-50 transition-colors" key={value.id}>
                                            <td className="px-6 py-4 text-gray-400 font-normal">{value.id}</td>
                                            <td className='px-6 py-4'><img src={import.meta.env.BASE_URL + value.imgUrl} className='w-[100px]' alt="productImage" /></td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">{value.item}</td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">{value.price.toLocaleString()}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full font-bold">{value.amount}개</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button className="inline-flex items-center justify-center w-7 h-7 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all active:scale-90 font-bold shadow-sm" onClick={()=>{addCount(value.id)}}>
                                                    +
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-center">
                        <button className="border border-gray-300 hover:border-gray-400 text-gray-700 bg-white hover:bg-gray-50 font-medium text-xs px-3.5 py-2 rounded-lg transition-colors active:bg-gray-100 shadow-sm flex items-center gap-1" onClick={()=>{sortName()}}>
                            이름순 정렬
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart