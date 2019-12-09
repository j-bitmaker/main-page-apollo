import React from 'react';
import './index.scss';
import logo from './logo.png';

const AppFooter = () =>(
    <footer className='section'>
        <div className='container'>
            <div className='row logos'>
                <div cclassName className='col-md-2 my-logo'>
                    <img src={logo} alt='j-bitmaker'/>
                </div>
                <div className='col-md-7'>
                    &nbsp;
                </div>
                <div className='col-md-3 soc-logos'>
                <button type='button'className="btn btn-outline-dark">
                    <i className="fa fa-linkedin-square large"></i>
                </button>
                <button type='button' className="btn btn-outline-dark">
                    <i className="fa fa-facebook-square"></i>
                </button>                
                <button type='button' className="btn btn-outline-dark">
                    <i className="fa fa-github"></i>
                </button>
                <button type='button' className="btn btn-outline-dark">
                    <i className="fa fa-twitter"></i>
                </button>
                </div>
            </div>
            <div className='mt-5 links'>
                <div className='col-md-3 first-column'>
                    <i className='link-title'>Game websites</i>
                    <a href='/seekers'>Seekers Notes: Hidden Mystery</a>
                    <a href='/cooking'>Cooking Diary: Tasty Hills</a>
                </div>
                <div className='col-md-3'>
                    &nbsp;
                </div>
                <div className='col-md-3 second-column'>
                    <i className='link-title'>Contact</i>
                    <a href='/info'>info@tipa-company.com</a>
                    <a href='/support'>support@tipa-company.com</a>
                </div>
                <div className='col-md-3 third-column'>
                    <a href='/privacy'>Privacy policy</a>
                    <a href='/terms'>Terms of service</a>
                    <a href='/cookie'>Cookie policy</a>
                    <a href='/press-kit'>Press kit</a>
                </div>
            </div>
            <span>
                @2019-2019 Good projec. All rights reserved
            </span>
        </div>
    </footer>
)

export default AppFooter;