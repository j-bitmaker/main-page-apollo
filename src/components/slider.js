import React from "react";
import "./index.scss";

  const Slider = ({img}) =>(
      <div className="">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {img.map((name, i)=>{
              let togglerClass = null;
              if (i===0){
                togglerClass = 'active'
              }
              return(
                <li key={i} data-target="#carouselExampleIndicators" className={togglerClass} data-slide-to={i}></li>
              )}
            )}
          </ol>
          <div className="carousel-inner">
            {img.map((name, i)=>{
              let itemClass = "carousel-item";
              if(i===0){
                itemClass +=' active'
              }
              return(
                <div key={name.index} className={itemClass}>
                  <img src={name.url} className="d-block w-100" alt="..."/>
                </div>
              )
            })}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
      </div>
    </div>
      
    );
export default Slider;