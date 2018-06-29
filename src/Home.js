import React from 'react'
import {Link} from 'react-router-dom'

const Home =() =>{
    return(
        <div className='home'>
            <h1>Welcome To Your Crypto Portfolio!</h1>
            <iframe className='video'  width="560" height="315" src="https://www.youtube.com/embed/9DCGEPZPxFM" frameBorder="0" allow="autoplay; encrypted-media"/>
            <div className='links'>
           <Link className='coinlink' to="/coins"> Coins </Link>
           <Link className='coinport' to="/myportfolio"> My Portfolio </Link>
           </div>
        </div>
    )
}


export default Home;