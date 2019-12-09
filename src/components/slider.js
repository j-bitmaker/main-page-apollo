import React from "react";
import "./index.scss";

  const Slider = () =>{
    const img = [
      {
        index: 0,
        url:
          "https://i.imgur.com/28dCx6G.jpg"
      },
      {
        index: 1,
        url:
          "https://www.wallpaperup.com/uploads/wallpapers/2014/03/31/317502/926ba89c5ce58075a833192974efe15c-700.jpg"
      },
      {
        index: 2,
        url:
          "https://wallpaperbro.com/img/1007096.jpg"
      },
      {
        index: 3,
        url:
          "https://i.pinimg.com/originals/d0/99/fb/d099fbe1334992232264f479a516983e.jpg"
      },
      {
        index: 4,
        url:
          "https://wallpaperaccess.com/full/7310.jpg"
      }
    ];
    return(
      <div className="slider">
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
  }
export default Slider;