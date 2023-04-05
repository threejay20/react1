import React, { useEffect, useState } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Media from "./Media";
const x = document.createElement("div")
const App = () => {
  const [id, setId]= useState([])



  return (
    <div>
        <input onChange={event => setId(event.target.value)} placeholder="enter id"/>
        <a href={`/getmovies/${id}`} type="button">submit</a>
        <BrowserRouter>
            <Routes>
                <Route path="/getmovies/:id" element={<Media/>}/>
            </Routes>

        </BrowserRouter>
    </div>







  );
}

export default App;

