import React, { useState } from 'react'
import ModuleBlock from './ModuleBlock';
import './Module.scss'

const Module = ({programm}) => {
    const [modules,  setModules] = useState([[...programm.specializedSubjects.slice(0,5)],
        [...programm.specializedSubjects.slice(5, programm.specializedSubjects.length)]
    ])

    return(
        <div className="module">
            <h2>{programm.title}</h2>
            <div className="module__content">
                {modules.map((arrSubj, i) => <ModuleBlock key={i} arrSubj={arrSubj} num={i+1}/>)}
            </div> 
      </div>
    )
}

export default Module;