import React from "react";
import NavBar  from "./components/NavBar";
import { Container } from "react-bootstrap";
import Film from "./components/Film";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DetailsFilm from "./components/DetailsFilm";
import { useSelector } from "react-redux";
const App=()=>{

const movies = useSelector((state)=>state.moviesReducer.movies)

return(
    <div>
        <NavBar/>
        <Container>
            <BrowserRouter>
            <Routes>
              {movies.map((item)=>{
                return(
                  <Route key={item.id} path={"/movies/"+item.id} element={<DetailsFilm item={item}/>} />
                )
              })}
                <Route path="/" element={<Film/>} />
            </Routes>
            </BrowserRouter>
        </Container>
    </div>
    )}

    export default App;