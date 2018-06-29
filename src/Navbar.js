import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
           <Link to="/"> Home </Link>
           <Link className='link1' to="/coins"> Coins </Link>
           <Link className='link2' to="/myportfolio"> My Portfolio </Link>
        </div>
    )
}

export default Navbar;