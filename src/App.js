import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"
import Picture from "./Picture"
import styled from "styled-components"


//styled components

const styledDiv = styled.div`
  
`

const styledHeader = styled.header`
  
`

function App() {

  const [baseURL] = useState("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
  const [picture, setPicture] = useState([])

  useEffect(() => {
    axios.get(baseURL)
      .then((res) => {
        console.log(res.data)
        setPicture(res.data)
      })
      .catch(error => { return error })
  }, [])


  return (
    <styledDiv className="App">
      <styledHeader>
        <h1>NASA Photo of the Day</h1>
      </styledHeader>
      <p>

      </p>
      <main>
        <Picture picture={picture} />
      </main>

    </styledDiv>
  );
}

export default App;
