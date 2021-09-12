import React from 'react'

import logo from '../URA_150px.png';

export default function URAHeader(props) {
    return (
        <header>
            <img src={logo} alt="Logo do URA" width="120px" />
            <h1> {props.title} </h1>
            
        </header>
    )
}