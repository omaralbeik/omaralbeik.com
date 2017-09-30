import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactSlider from "react-slick";
import SliderItem from "./slider-item";

class Slider extends Component {
  static propTypes = {
    sliders: PropTypes.array.isRequired
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      className: "slick-dotted"
    };
    const {sliders} = this.props;
    return (
      <div className="flat-bullets hidden-xs">
        <ReactSlider id="slider" {...settings}>
          {sliders.map(s => (<div key={s.id}><SliderItem slider={s}/></div>))}
        </ReactSlider>
      </div>
    );
  };
}

export default Slider;
