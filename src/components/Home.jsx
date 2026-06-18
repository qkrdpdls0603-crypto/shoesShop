import React, { useState } from 'react'
import Product from './Product'
import Title from './Title'
import data2 from '../db/data2'
import Nike from './Nike'
import axios from 'axios'

const Home = (props) => {
    const { shoes, setShoes } = props
    const [nike, setNike] = useState(data2)
    const [count, setCount] = useState(1) 

    const sort = (index) => {
        let copy = []
        if (index === 'title') {
            copy = [...shoes].sort((a, b) => (a.title > b.title) ? 1 : -1)
        } else if (index === 'asc') {
            copy = [...shoes].sort((a, b) => (a.price > b.price) ? 1 : -1)
        } else if (index === 'desc') {
            copy = [...shoes].sort((a, b) => (a.price < b.price) ? 1 : -1)
        }
        setShoes(copy)
    }

    const moreNike = () => {
        if (count === 1) {
            axios.get('https://jungwoonan.github.io/react_data/nike2.json')
                .then((result) => {
                    const copy = [...nike, ...result.data]
                    setNike(copy)
                    setCount(2)
                })
                .catch(err => console.log(err))
        } else if (count === 2) {
            axios.get('https://jungwoonan.github.io/react_data/nike3.json')
                .then((result) => {
                    const copy = [...nike, ...result.data]
                    setNike(copy)
                    setCount(3)
                })
                .catch(err => console.log(err))
        } else {
            alert('더이상 상품이 없습니다.')
        }
    }

    return (
        <>
            <div className="slider"></div>

            <Title tindex='1' />

            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-blue-700" onClick={() => { sort('title') }
                }>
                    이름순 정렬
                </button>

                <button className="border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-gray-600" onClick={() => { sort('asc') }}>
                    낮은가격순 정렬
                </button>

                <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-green-700" onClick={() => { sort('desc') }}>
                    높은가격순 정렬
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        shoes.map(shoe =>
                            <Product shoes={shoe} key={shoe.id} />
                        )
                    }
                </div>
            </div>

            <Title tindex='2' />

            <div className="flex justify-center my-6">
                <button variant="outline-success" onClick={() => {
                if (count === 1) {axios.get('https://jungwoonan.github.io/react_data/nike2.json').then((result) => {
                    const copy = [...nike, ...result.data];
                    setNike(copy);
                    setCount(2);
                    })
                } else if (count === 2) {axios.get('https://jungwoonan.github.io/react_data/nike3.json').then((result) => {
                    const copy = [...nike, ...result.data];
                    setNike(copy);
                    setCount(3);
                    })
                } else {
                    alert("더이상 상품이 없습니다.");
                }
                }}> + 3개 상품 더 보기 </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        nike.map(item =>
                            <Nike nike={item} key={item.id} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Home