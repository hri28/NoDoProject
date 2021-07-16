import React from 'react'
import { Link } from 'react-router-dom';
import "./HeroSection.css"
import Navbar from './Navbar'


function HeroSection() {
    return(
        <>
        <Navbar />
        <div className='container-fluid hero-container'>
        <div className="row">
        <div className="col-sm-7">
        <img className="img2 img-responsive" src="landing.png" width="640px" height="495px" />
        <img className="img1 img-responsive" src="hero-illustration.png" width="640px" height="495px" />
        </div>
        <div className="col-sm-5 content">
        <h1 className="heroh1"><span className="stayorg">Stay <div className="organised">Organised.</div></span></h1><br />
        <p className="herop">NoDo is a space where you can keep track of your daily todos, stay focused with the countdown timer and take clean, precise notes.<br /><br />Start by clicking any of the buttons below.</p>
         <Link to='/todo'><button className="btns">to do</button></Link>
        <Link to = '/notes'><button className="btns">notes</button></Link>
        <Link to='/timer'><button className="btns">timer</button></Link>
        </div>
        </div>
        
        </div>
        </>
    
    )
}

export default HeroSection