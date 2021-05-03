import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Instagram.css';

export default class Instagram extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      fade: true,
      arrows: false
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div id="ig1" className="ig">
            
          </div>
          <div id="ig2" className="ig">
            
          </div>
          <div id="ig3" className="ig"> 
            
          </div>
          <div id="ig4" className="ig">
            
          </div>
          <div id="ig5" className="ig">
          </div>
          <div id="ig6" className="ig">
          </div>
        </Slider>
      </div>
    );
  }
}