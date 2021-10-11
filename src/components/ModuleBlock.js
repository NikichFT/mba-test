import React, { useEffect, useState } from 'react'
import './ModuleBlock.scss'
import plus from '../img/plus.svg'
import minus from '../img/minus.svg'

const ModuleBlock = ({arrSubj, num}) => {
    const [desc, setDesc] = useState(false)
    const [screenSize, setScreenSize] = useState()

    const handleShow = () => {
        if (screenSize <= 768) setDesc(!desc)
    }

    useEffect(()=>{
        window.innerWidth <= 768 ? setDesc(false) : setDesc(true)
        setScreenSize(window.innerWidth)
    }, [window.innerWidth])

    return(
        <div className="module-block">
            <div className={`module-block__head ${desc && screenSize <= 768  ? 'active' : ''}`} onClick={()=> handleShow()}>
                <img src={desc ? minus : plus} className="module-block__icon"/>
                <div className="module-block__name">{num} модуль</div> 
            </div>
            {desc && <div className="module-block__description">
                <ul>
                    {arrSubj.map((subj, i) => <li key={i}>{subj}</li>)}
                </ul>
            </div>}
      </div>
    )
}

export default ModuleBlock;