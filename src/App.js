
import { useEffect, useState } from 'react';
import './App.css';
import { BsSearch } from "react-icons/bs";
import MovieCart from './MovieCart';


const API_URL='http://www.omdbapi.com?apikey=f1d1f2d0';

function App() {
  const [movies,SetMovies]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");


  const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();

    SetMovies(data.Search);
    console.log(data.Search);
  }
  useEffect(()=>{
    searchMovies()
  },[])
  return (
    <div className='app'>
      <h1>MovieWorld</h1>
      <div className="search">
        <input type="text" placeholder='Search for Movies'  value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <BsSearch className="SearchIcon" onClick={()=>{searchMovies(searchTerm)}}/>
      </div>
      {
        movies?.length>0?(  <div className="container">
        {movies.map((movie,i)=>(
          <MovieCart key={i} movie={movie}/>
        ))}
      </div>):(
        <div className="empty">
          <h2>Movies not Found</h2>
        </div>
      )
      }
      {/* <div className="container">
        <MovieCart movie1={movies[0]}/>
      </div> */}
    </div>
  );
}

export default App;
