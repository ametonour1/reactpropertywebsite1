import React from 'react'
import Cyclades from "../Assets/cyclades3.jpg";
import "../Styles/Home.css"
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${Cyclades})`}} >
        <div>
         <h1>Discover Your Next Home In Greece</h1>
         <p>This Is Where The Adventure Begins!</p>
        </div>
        <Link to="/properties">
        <button>Get Started</button>
        </Link>
    </div>
  )
}
