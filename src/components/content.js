import React from 'react'
import styled from "styled-components"
import {StyledContent} from "../styling/styles"


 const Content = props => {
const {data} = props
console.log(data)
return (
    <StyledContent className = 'dateOf'>
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
     </StyledContent>
)
}
export default Content