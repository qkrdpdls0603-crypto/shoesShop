import React, { useContext, useEffect, useState } from 'react'
import { Context1 } from '../App';
import data from '../db/data';

const TabContent = ({ tab }) => {
    const [shoes, setShoes] = useState(data)
    const [fade, setFade] = useState('')
    const { remain } = useContext(Context1);


    useEffect(()=>{
        const aniTimer = setTimeout(()=>{setFade('end')}, 50)
        return ()=>{
            setFade('')
            clearTimeout(aniTimer)
        }
    }, [tab])

    return (
        <div className={'text-center start ' + fade}>
            {[<div>내용0{remain[0]}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
}


export default TabContent