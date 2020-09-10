import React from 'react'
import styled from "styled-components"
import {Styleddiv} from "../styling/styles"

 const Footer = () => {
    return(
        <Styleddiv className = 'sources'>
            <p>Authors and editors: Robert Nemiroff (MTU) and Jerry Bonnell (UMCP)
                NASA Official: Phillip Newman Specific rights apply.
                NASA Web Privacy Policy and Important Notices
                A service of: ASD at NASA / GSFC
                and Michigan Tech. U.
            </p>
        </Styleddiv>
    )
}
export default Footer