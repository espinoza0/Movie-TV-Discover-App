import {Route, Routes} from "react-router-dom"
import './App.css'
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import TvPage from "./pages/TvPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies/page/:page" element={<MoviePage/>} />
      <Route path="/tv/page/:page" element={<TvPage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  )
}

export default App
