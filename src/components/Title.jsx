import React from 'react'

const Title = (props) => {
    const {tindex} = props
    let title, sub_title;

    if(tindex === '1'){
        title = "MD's Pick";
        sub_title = '시선을 사로잡는 스타일링, 제품들을 만나보세요.'
    }else if (tindex === '2'){
        title = "여름을 위한 컬렉션";
        sub_title = '가볍게, 시원하게 썸머 컬렉션으로 여름을 준비해 보세요.'
    }

    return (
        <div className="mt-[70px] text-center space-y-2">
            <h3 className="text-2xl font-bold text-gray-900 tracking-wide">
                {title}
            </h3>

            <p className="text-gray-500 text-sm md:text-base">
                {sub_title}
            </p>
        </div>
    )
}

export default Title