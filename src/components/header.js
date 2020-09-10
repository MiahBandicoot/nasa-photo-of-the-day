import React, {useState} from "react";
import styled from "styled-components"

const Styleddiv = styled.div`
    background-color: royalblue;
    -webkit-text-stroke: .5px black;
    color: whitesmoke;
  
`

 const Header = () => {
     
return(
    <Styleddiv className = 'title'>
        <h2>Astronomy Picture</h2>
        <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
        </p>
    </Styleddiv>
)
}

export default Header