import React from "react";
import Slider from "react-slick";
import Slide1 from './images/storyboard1.png';
import Slide2 from './images/storyboard2.png';
import Slide3 from './images/storyboard3.png';
 
class SimpleSlider2 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
        <img className="slides shadow" src={Slide1} />
        </div>
        <div>
        <img className="slides shadow" src={Slide2} />
        </div>
        <div>
        <img className="slides shadow" src={Slide3} />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider2;
