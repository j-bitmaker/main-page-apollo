import React from 'react';
import logo from './logo.png';
import './index.scss';

const AppHeader = () =>(
    <header>   
        <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-center">
            <a href="/" className="navbar-brand mr-0">
                <img src={logo}/>    
            </a> 
            <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
                <ul className="navbar-nav mx-auto text-center">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">MAIN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="//codeply.com">COMPANY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CAREER</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">GAMES</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">NEWS</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SUPPORT</a> 
                    </li>
                </ul>
                <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
                    <li className="nav-item">
                        <a className="nav-item" href="">Рус</a> 
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default AppHeader;