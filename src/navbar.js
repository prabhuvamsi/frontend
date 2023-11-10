import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/novels">
        <button style={{ borderRadius: '30px', backgroundColor: 'black', color: 'white', width: '100px', height: '40px' }}>Novels</button>
      </Link>
      <Link to="/journals">
        <button style={{ borderRadius: '30px', backgroundColor: 'black', color: 'white', width: '100px', height: '40px' }}>Journals</button>
      </Link>
      <Link to="/devotional">
        <button style={{ borderRadius: '30px', backgroundColor: 'black', color: 'white', width: '100px', height: '40px' }}>Devotional</button>
      </Link>
      <Link to="/business">
        <button style={{ borderRadius: '30px', backgroundColor: 'black', color: 'white', width: '100px', height: '40px' }}>Business</button>
      </Link>
      <Link to="/home">
        <button style={{ borderRadius: '30px', backgroundColor: 'black', color: 'white', width: '100px', height: '40px' }}>Home</button>
      </Link>
      <Link to="/cart">
        <button style={{ borderRadius: '30px', backgroundColor: 'black', color: 'white', width: '100px', height: '40px' }}>Cart</button>
      </Link>
    </div>
  );
}

export default Navbar;
