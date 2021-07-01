import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"
import Picture from "./Picture"




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
    <div className="App">
      <header>
        <h1>NASA Photo of the Day</h1>
      </header>
      <p>

      </p>
      <main>
        <Picture picture={picture} />
      </main>

    </div>
  );
}

export default App;
