import React from 'react'
import style from "./CopyComponent.module.css"
const CopyComponent = (props) => {
 
  const map2 = props.map.map(a =>
    <React.Fragment key={a.id}>
      <div className={style.Component_1}>
        <img src={a.img_1} alt="rasm bor edi!" />
        <h1>VS</h1>
        <img src={a.img_2} alt="rasm bor edi!" />
      </div>
      <div className={style.Component_2}>
        <div className={style.Component_2__child}>
          <h1>{a.title_1}</h1>
          <h1>-</h1>
          <h1>{a.title_2}</h1>
          <h2>{a.game_type}</h2>
        </div>
        <p>{a.data}</p>
      </div>
    </React.Fragment>
  )
  return (
    <div className={style.CopyComponent}>
     {map2}
    </div>
  )
}

export default CopyComponent