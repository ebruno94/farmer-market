import React from 'react';
import { Link } from 'react-router-dom/';

function Header(){
  return(
    <div>
      <h1 className="title">Farmer's Market</h1>
      <hr/>
      <Link to="/">Home</Link> | <Link to="/produce-list">Seasonal Produce List</Link>

    </div>
  );
}

export default Header;
