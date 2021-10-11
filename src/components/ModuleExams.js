import React from 'react'
import './ModuleExams.scss'

const ModuleExams = () => {
    return(
        <div className="module-exams">
          <div className="module-exams__head">
          Итоговая аттестация
          </div>
          <div className="module-exams__description">
            <ul>
              <li>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
              <li>Защита итоговой аттестационной работы</li>
            </ul>
          </div>
        </div>
    )
}

export default ModuleExams;