import React, { useEffect, useState } from 'react'

const TabContent = ({ tab }) => {
    const [fade, setFade] = useState('')

    useEffect(()=>{
        const aniTimer = setTimer(()=>{setFade('end')}, 50)
        return ()=>{
            setFade('')
            clearTimeout(aniTimer)
        }
    }, [tab])

    return (
        <div className={"text-center start " + fade}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>        
    )
}


export default TabContent