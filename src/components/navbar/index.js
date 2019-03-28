import React from 'react';

function Navbar(props){

return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
            <a className="navbar-brand" href="#">React Card Game</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                
            <li className="nav-item">
                <br></br>
                <div className="alert alert-secondary" role="alert">
                      Current Score:  {props.currentScore}   
                </div>
            </li>

            <li className="nav-item">
            <span>   ........   </span>
            </li>

            <li className="nav-item">
                <br></br>
                <div className="alert alert-success" role="alert">
                      Best Score:  {props.maxScore}    
                </div>
            </li>

            </ul>
            </div>
        </div>
    </nav>
)

}

export default Navbar;