import React from 'react';
import './index.scss';
import logo from './img/logo.png';
import whatsapp from './img/whatsapp.svg';
import telegram from './img/telegram.svg';
import github from './img/github.svg';

const AppFooter = () =>(
    <footer className='jumbotron section'>
        <div>
            <div className='logos'>
                <div className='my-logo'>
                    <img src={logo} alt='j-bitmaker'/>
                </div>
                <div className='soc-logos'>
                    <img src={whatsapp} alt='whatsapp'/>
                    <img src={telegram} alt='telegram'/>
                    <img src={github} alt='github'/>
                </div>
            </div>
            <div className='mt-5 links'>
                <div className='col-md-3 first-column'>
                    <i className='link-title'>Game websites</i>
                    <i>Seekers Notes: Hidden Mystery</i>
                    <i>Cooking Diary: Tasty Hills</i>
                </div>
                <div className='col-md-3'>
                    &nbsp;
                </div>
                <div className='col-md-3 second-column'>
                    <i className='link-title'>Contact</i>
                    <i>info@tipa-company.com</i>
                    <i>support@tipa-company.com</i>
                </div>
                <div className='col-md-3 third-column'>
                    <i>Privacy policy</i>
                    <i>Terms of service</i>
                    <i>Cookie policy</i>
                    <i>Press kit</i>
                </div>
            </div>
            <span>
                @2019-2019 Good projec. All rights reserved
            </span>
        </div>
    </footer>
)

export default AppFooter;