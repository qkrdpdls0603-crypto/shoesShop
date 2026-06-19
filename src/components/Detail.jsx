import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TabContent from './TabContent'
import styled from 'styled-components'
// import { useDispatch } from 'react-redux'
import { addItem } from '../state/cartSlice'

const Box = styled.div`
    padding: 20px 0;
    color: gray;
`

const YellowBtn = styled.button`
    color : white;
    font-size: 30px;
    width: 100%;
    padding : 100px;
    border: 1px solid #ccc;
    background-image:url("https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80");
    background-size: cover;
    background-position: center;
`

const Detail = (props) => {
    const { shoes } = props
    const { id } = useParams()
    // console.log(id)
    const [tab, setTab] = useState(0)
    const [alert, setAlert] = useState(true)
    const [fade, setFade] = useState('')
    // const dispatch = useDispatch()
    const navigate = useNavigate()



    
    let selproduct = shoes.find(x => x.id == parseInt(id))

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setAlert(false)
        }, 2000)
        const aniTimer = setTimeout(()=>{setFade('end')}, 50)

        return ()=>{
            clearTimeout(timer)
            setFade('')
            clearTimeout(aniTimer)
        }
    }, [])

    return (
        <div className={"max-w-7xl mx-auto px-4 w-full py-8 start " + fade}>
            {
                alert === true &&
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg font-medium w-full text-center">
                    2초이내 구매시 할인
                </div>
            }

            <Box>
                <YellowBtn>지금 구매하면 10% 할인</YellowBtn>
            </Box>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="w-full">
                    <img src={import.meta.env.BASE_URL + selproduct.imgUrl} alt="상품 이미지" className="w-full h-auto" />
                </div>
                <div className="pt-5 md:pt-0 space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">{selproduct.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{selproduct.content}</p>
                    <p className="text-xl font-semibold text-gray-900">{selproduct.price}원</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-md active:scale-95 transform" onClick={() => {
                        addItem({ id: selproduct.id, imgUrl: selproduct.imgUrl, item: selproduct.title, price:selproduct.price,  amount: 1 });
                        if (window.confirm('장바구니로 이동하시겠습니까?')) {
                            navigate('/cart');
                        }
                    }}>
                        주문하기
                    </button>
                </div>
            </div>

            <ul className="flex border-b border-gray-200 list-none p-0 m-0">
                <li onClick={() => setTab(0)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 -mb-[1px] border-b-2 cursor-pointer select-none ${tab === 0
                        ? 'border-blue-600 text-blue-600 font-semibold' // 활성화 스타일
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' // 비활성화 스타일
                        }`}
                >
                    버튼0
                </li>

                <li onClick={() => setTab(1)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 -mb-[1px] border-b-2 cursor-pointer select-none ${tab === 1
                        ? 'border-blue-600 text-blue-600 font-semibold'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    버튼1
                </li>

                <li onClick={() => setTab(2)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 -mb-[1px] border-b-2 cursor-pointer select-none ${tab === 2
                        ? 'border-blue-600 text-blue-600 font-semibold'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    버튼2
                </li>
            </ul>
	
            <TabContent tab={tab} shoes={shoes} />


        </div>
    )
}

export default Detail