import React from 'react';
import logo from './img/logo.png';
import './index.scss';

const AppHeader = () =>(
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="d-flex w-50 order-0">
                <img src={logo}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">MAIN <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">COMPANY</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CAREER</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">OTHER</a>
                </li>
                </ul>
                <div className="my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </nav>
    </header>
)

export default AppHeader;