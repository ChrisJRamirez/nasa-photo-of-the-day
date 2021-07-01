import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"




function App() {

  const [baseURL] = useState("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
  const [picture, setPicture] = useState("This is a picture of space")

  useEffect(() => {
    axios.get(baseURL)
      .then((res) => {
        console.log(res.data)
      })
      .catch(error => { return error })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
