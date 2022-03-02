import React from 'react'
import logo1 from "../../../assets/images/about-1x.png"
import logo2 from "../../../assets/images/home-1x.png"
import logo3 from "../../../assets/images/about-1x.png"
import logo4 from "../../../assets/images/home-1x.png"
import "./imagesSlider.scss"
const ImagesSlider = () => {
  return (
    <div className="img-slider">
      <div className="img-slider__slide img-slider__slide--active">
        <img className='img-slider__img' src={logo1} alt=""/>
        
      </div>
      <div className="img-slider__slide">
        <img className='img-slider__img' src={logo2} alt=""/>
        
      </div>
      <div className="img-slider__slide">
        <img className='img-slider__img' src={logo3} alt=""/>
        
      </div>
      <div className="img-slider__slide">
        <img className='img-slider__img' src={logo4} alt=""/>
        
      </div>
      <div className="img-slider__slide">
        <img className='img-slider__img' src={logo1} alt=""/>
        
      </div>
      <div className="img-slider__navigation">
        <div className="radio-btn radio-btn--active"></div>
        <div className="radio-btn"></div>
        <div className="radio-btn"></div>
        <div className="radio-btn"></div>
        <div className="radio-btn"></div>
      </div>
    </div>
  )
}

export default ImagesSlider