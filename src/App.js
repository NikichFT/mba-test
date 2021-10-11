import './App.scss';
import React, { useState } from 'react'
import {useEffect} from 'react'
import Module from './components/Module'
import ModuleExams from './components/ModuleExams';
import ModulePractice from './components/ModulePractice';
import {fetchData} from './service/fetchData'

function App() {
  const [programms, setProgramms] = useState([])

  useEffect(()=>{
    let count = 0;
    let prev = {};
    fetchData()
    .then(res => 
      {console.log(res.data)
      res.data.forEach((programm, i) => {
        if (i === 0){ 
          setProgramms((prevState) => [...prevState, programm])
          count++
          prev = programm.url
        }
        else if (i !== 0 && programm.url !== prev && count < 5 && programm.specializedSubjects.length === 10) {
          setProgramms((prevState) => [...prevState, programm])
          count++
          prev = programm.url
        }
    })
  }
    )
    console.log(programms)
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Специализированные дисциплины</h1>
        <div className="module-area">
          {programms.map((programm) => <Module key={programm._id} programm={programm}/>)}
          <div className="module-other">
            <ModulePractice/>
            <ModuleExams/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
