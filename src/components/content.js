import React from 'react'

 const Content = props => {
const {data} = props
return (
    <div className = 'dateOf'>
       <h2>{data.date}</h2>
        <div className = 'nasaCaptures'>
            <img
            alt = 'Nasa Space Captures'
            className = 'ContImg'
            src = {data.hdurl}/>
        </div>
        <div className = 'chickenFriedSteak'>
            {data.title}
        </div>
        <div className = 'descrip'>
            <p>{data.explanation}</p>
        </div>
     </div>
)
}
export default Content