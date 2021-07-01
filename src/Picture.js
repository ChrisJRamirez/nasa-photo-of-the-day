import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"



const Picture = (props) => {
    return (

        < section >
            {
                console.log(props.picture)
            }
            <h3>Title: {props.picture.title}</h3>
            <img src={props.picture.hdurl} />
            <p>{props.picture.explanation}</p>

        </section >
    )
}

export default Picture