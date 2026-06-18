import React from 'react'

const Nike = (props) => {
    const { nike } = props

    return (
        <div className="flex flex-col items-center text-center p-4">
            <img
                src={import.meta.env.BASE_URL + nike.imgUrl}
                className="w-4/5 h-auto rounded-xl shadow-sm mb-4 object-cover transform hover:scale-102 transition-transform duration-300"
                alt='item2'
            />
            <h5 className="text-lg font-bold text-gray-900 tracking-tight">
                {nike.title}
            </h5>
            <p className="text-sm text-gray-500 mt-1 max-w-[250px] line-clamp-2">
                {nike.content}
            </p>
            <p className="text-base font-bold text-gray-900 mt-2">
                {nike.price}원
            </p>
        </div>
    )
}

export default Nike