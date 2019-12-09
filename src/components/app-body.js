
import React from "react";
import Slider from './slider';
import News from './list-news';
import Hiring from './list-hiring';
import './index.scss'

const AppBody = ({img, news, jobs}) => (
        <>
            <Slider/> 
            <News/>
            <Hiring/>
        </>
  );
export default AppBody;
