import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"
import styled from "styled-components"

// Styled Components

const StyledP = styled.p`
    font-family: sans-serif;
    color: #F08080;
    display: flex;
    flex-direction: row;
    margin: 1rem;
    border: 5px dotted yellow;
    background-color: black;
    line-height: 1.5rem;
`



const Picture = (props) => {
    return (

        < section >
            {
                console.log(props.picture)
            }
            <h3>Title: {props.picture.title}</h3>
            <img src={props.picture.hdurl} alt="random picture from NASA API" />
            <StyledP>{props.picture.explanation}</StyledP>

        </section >
    )
}

export default Picture